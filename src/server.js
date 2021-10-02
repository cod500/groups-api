import express from 'express';
import bodyParser from 'body-parser';
import * as admin from 'firebase-admin';
import credentials from './credentials.json';
import { db } from './db';
import { routes } from './routes';
import dotenv from 'dotenv';

admin.initializeApp({ credential: admin.credential.cert(credentials) });

const app = express();
dotenv.config();


app.use(bodyParser.json());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

const PORT = process.env.PORT || 8080;

const start = async () => {
    await db.connect(process.env.CONNECTION_URL);
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}

start();