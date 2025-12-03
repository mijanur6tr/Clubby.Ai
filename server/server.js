import express from 'express';
import cors from "cors";
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import aiRouter from './routes/aiRoutes.js';
import cloudinaryConfig from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';

const app = express();

// Cloudinary config
await cloudinaryConfig();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Public route
app.get("/", (req, res) => res.send("Server is running"));

// Protect all /api routes
app.use("/api/ai", requireAuth(), aiRouter);
app.use("/api/user", requireAuth(), userRouter);

// Only listen locally
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Running locally on port ${port}`));
}

export default app;
