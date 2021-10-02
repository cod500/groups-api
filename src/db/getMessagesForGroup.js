import { db } from './db/db.js';
import { getUser } from './getUser.js';

export const getMessagesForGroup = async (groupId) => {
    const connection = db.getConnection();
    const messages = await connection.collection('messages').find({ groupId }).toArray();
    const usersForMessages = await Promise.all(messages.map(message =>
        getUser(message.userId)));
    const populatedMessages = messages.map((message, i) => ({
        ...message,
        userName: usersForMessages[i].fullName,
    }));
    return populatedMessages;
}