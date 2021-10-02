import { db } from './db/db.js';

export const addMessageToGroup = async (groupId, userId, text) => {
    const connection = db.getConnection();
    connection.collection('messages').insertOne({ groupId, userId, text });
}
