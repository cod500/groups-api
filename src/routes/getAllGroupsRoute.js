import { getAllGroups } from '../db/db.js';

export const getAllGroupsRoute = {
    method: 'get',
    path: '/groups',
    handler: async (req, res) => {
        const groups = await getAllGroups();
        res.status(200).json(groups);
    },
}