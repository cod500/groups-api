import { db } from './db/db.js';

export const createNewUser = async (user) => {
    const connection = db.getConnection();
    await connection.collection('users').insertOne({ id: user.id, email: user.email, fullName: user.fullName })
}