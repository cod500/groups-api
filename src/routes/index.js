import { acceptRequestRoute } from './acceptRequestRoute.js';
import { createGroupRoute } from './createGroupRoute.js';
import { createRequestRoute } from './createRequestRoute.js';
import { createMessageRoute } from './createMessageRoute.js';
import { createUserRoute } from './createUserRoute.js';
import { getAllGroupsRoute } from './getAllGroupsRoute.js';
import { getGroupRoute } from './getGroupRoute.js';
import { getGroupMessagesRoute } from './getGroupMessagesRoute.js';
import { getJoinGroupRequestsRoute } from './getJoinGroupRequestsRoute';
import { getUserGroupsRoute } from './getUserGroupsRoute.js';
import { rejectRequestRoute } from './rejectRequestRoute.js';

export const routes = [
    acceptRequestRoute,
    createGroupRoute,
    createRequestRoute,
    createMessageRoute,
    createUserRoute,
    getAllGroupsRoute,
    getGroupRoute,
    getGroupMessagesRoute,
    getJoinGroupRequestsRoute,
    getUserGroupsRoute,
    rejectRequestRoute,
];