import { Router } from 'express';
import { verifyToken } from '../middleware/auth';
const router = Router();

// Public endpoints (Firebase handles auth client-side)
router.post('/register', (_req, res) => {
  res.status(200).json({ message: 'Register via client Firebase SDK' });
});
router.post('/login', (_req, res) => {
  res.status(200).json({ message: 'Login via client Firebase SDK' });
});

// Protected example route
router.get('/profile', verifyToken, (req, res) => {
  const user = (req as any).user;
  res.json({ uid: user.uid, email: user.email });
});

export default router;