import { createNewUser } from '../db/index.js';
export const createUserRoute = {
    method: 'post',
    path: '/sign-up',
    handler: async (req, res) => {
        const user = req.body;
        console.log(user.fullName, user.email, user.id);
        await createNewUser(user);
        res.status(200).json(user);
    },
};