import { db } from './db/db.js';
import { getGroup } from './getGroup.js';
import { getMessagesForGroup } from './getMessagesForGroup.js';

export const getMemberPopulatedGroup = async (groupId) => {
    const group = await getGroup(groupId);
    const messagesForGroup = await getMessagesForGroup(groupId);
    const populatedGroup = {
        ...group,
        messages: messagesForGroup,
    };
    return populatedGroup;
}