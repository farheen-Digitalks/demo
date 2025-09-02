import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/jwt.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    const pass = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, pass);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  const user = await User.find();

  if (!user) {
    res.status(404).json({ message: "No users found" });
  }

  res.status(200).json(user);
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  const user = await User.findOne({ email });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(400).json({ error: "Invalid credentials" });
  }

  res.status(201).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  });

};
