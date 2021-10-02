import express from 'express';
import bodyParser from 'body-parser';
import admin from 'firebase-admin';
import credentials from './credentials.json';
import { db } from './db/db.js';
import { routes } from './routes/index.js';
import dotenv from 'dotenv';

admin.initializeApp({ credential: admin.credential.cert(credentials) });

const app = express();
dotenv.config();


app.use(bodyParser.json());

app.get('/', req, res => {
    res.send('Community Groups API')
})

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