import { db } from './db.js';
import { getUser } from './getUser.js';

export const getRequestsForGroup = async (groupId) => {
    const connection = db.getConnection();
    const requests = await connection.collection('requests').find({ groupId }).toArray();
    const usersForRequests = await Promise.all(requests.map(request => getUser(request.userId)));
    const populatedRequests = requests.map((request, i) => ({
        ...request,
        userName: usersForRequests[i].fullName,
    }));
    return populatedRequests;
}