import { db } from './db.js';
import { getMemberPopulatedGroup } from './getMemberPopulatedGroup.js';
import { getRequestsForGroup } from './getRequestsForGroup.js';

export const getOwnerPopulatedGroup = async (groupId) => {
    const group = await getMemberPopulatedGroup(groupId);
    const requests = await getRequestsForGroup(groupId);
    const populatedGroup = {
        ...group,
        requests,
    };
    return populatedGroup;
}