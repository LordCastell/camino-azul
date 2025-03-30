require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Ruta para enviar la API Key al frontend
app.get('/get-api-key', (req, res) => {
    res.json({ apiKey: process.env.GOOGLE_MAPS_API_KEY });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
