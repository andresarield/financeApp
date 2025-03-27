import { Request, Response } from 'express';
import Transaction from '../models/Transaction';

export const getTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await Transaction.find({ user: req.user.userId });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener transacciones' });
  }
};

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const { description, amount, category, date } = req.body;
    const transaction = new Transaction({
      description,
      amount,
      category,
      date: new Date(date),
      user: req.user.userId,
    });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear transacción' });
  }
};