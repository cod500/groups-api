import { db } from './db.js';
import { getUser } from './getUser.js';

export const getAllGroups = async () => {
    const connection = db.getConnection();
    const groups = await connection.collection('groups').find({}).toArray();
    const groupOwners = await Promise.all(
        groups.map(group => getUser(group.ownerId)),
    );
    const populatedGroups = groups.map((group, i) => ({
        ...group,
        owner: groupOwners[i],
    }));

    return populatedGroups;
}