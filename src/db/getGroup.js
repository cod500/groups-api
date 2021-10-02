import { db } from './db/db.js';
import { getUser } from './getUser.js';

export const getGroup = async (groupId) => {
    const connection = db.getConnection();
    const group = await connection.collection('groups').findOne({ id: groupId });
    const owner = await getUser(group.ownerId);
    const populatedGroup = {
        ...group,
        owner,
    };

    return populatedGroup;
}