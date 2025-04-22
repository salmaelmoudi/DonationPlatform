import { Router } from 'express';
import { verifyToken } from '../middleware/auth';
const router = Router();

// List all donations
router.get('/', (_req, res) => {
  res.json([]); // TODO: fetch from DB
});

// Create donation (protected)
router.post('/', verifyToken, (req, res) => {
  const donation = req.body;
  // TODO: save donation in DB
  res.status(201).json(donation);
});

export default router;