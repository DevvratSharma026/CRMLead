import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import leadRoutes from './routes/leads.routes.js';

dotenv.config();
const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
connectDB();

app.use('/api/leads', leadRoutes);
app.get('/api/health', (req, res) => {
    res.status(200).json({
        success: true,
        status: "ok"
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})