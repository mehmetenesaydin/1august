import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const port = 7132;

// CORS ayarları (geliştirme sırasında frontend'den gelen istekleri kabul etmek için)
app.use(cors());

// Statik dosyalar (frontend build dosyaları)
app.use(express.static(path.join(__dirname, 'frontend/build')));

// API endpoint
app.get('/api/download', (req, res) => {
    // Örnek: Basit bir dosya indirme işlevi
    res.send('This is a sample file');
});

// Frontend uygulamasını sun
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Backend server is running on port ${port}`);
});
