import { db } from './db/db.js';

export const rejectRequest = async (requestId) => {
    const connection = db.getConnection();
    await connection.collection('requests').deleteOne({ id: requestId });
}