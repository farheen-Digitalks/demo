import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    const TOKEN = process.env.JWT_SECRET;
    return jwt.sign({ id: user.id, email: user.email }, TOKEN, { expiresIn: "30d" });
}

export const verifyToken = (token) => {
    const TOKEN = process.env.JWT_SECRET;
    return jwt.verify(token, TOKEN);
}