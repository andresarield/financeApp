import { Router } from 'express';
import { authenticate } from '../middleware/authMiddleware';
import { getTransactions, createTransaction } from '../controllers/transactionController';

const router = Router();

router.get('/', authenticate, getTransactions);
router.post('/', authenticate, createTransaction);

export default router;