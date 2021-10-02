import { db } from './db/db.js';

export const getUser = async (id) => {
    const connection = db.getConnection();
    const user = await connection.collection('users').findOne({ id });
    return user;
}