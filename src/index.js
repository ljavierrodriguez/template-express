import http from 'http';
import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 9000;
const app = express();

app.use(express.json({ limit: '32mb' }))
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: '*'
}))

const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))