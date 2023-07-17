import { jwtVerify } from "jose";

export const getJwtSecretKey = () => {
    const secret = process.env.JWT_SECRET_KEY;
    if (!secret || secret.length === 0) {
        throw new Error('No JWT secret')
    }
    return secret;
}


export const verifyAuth = async (token) => {
    try {
        const verified = await jwtVerify(token, new TextEncoder().encode(getJwtSecretKey()));
        return verified
    } catch (error) {
        throw new Error('Your Token is invalid');
    }
}