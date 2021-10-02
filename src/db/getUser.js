import { db } from './db.js';

export const getUser = async (id) => {
    const connection = db.getConnection();
    const user = await connection.collection('users').findOne({ id });
    return user;
}