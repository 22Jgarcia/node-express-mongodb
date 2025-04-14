import 'dotenv/config';
import express from 'express';
import routesMascotas from './routes/mascotas.js';
import bodyParser from 'body-parser';
const app = express(); 

app.use('/mascotas', routesMascotas);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
} catch (e) {
    console.error('Error starting server:', e);
}

