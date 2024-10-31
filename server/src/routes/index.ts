import type { Request, Response } from 'express';
import express from 'express';
import path from 'path';
import apiRoutes from './api/index.js';

const router = express.Router();

// Define __dirname and __filename for CommonJS compatibility
const __filename = path.resolve();
const __dirname = path.dirname(__filename);

router.use('/api', apiRoutes);

// Serve up React front-end in production
router.use((_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

export default router;