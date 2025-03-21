import { Request, Response } from 'express';
import { Transaction } from '../models/Transaction';

let transactions: Transaction[] = [];

export const getTransactions = (req: Request, res: Response) => {
  res.json(transactions);
};

export const createTransaction = (req: Request, res: Response) => {
  const newTransaction: Transaction = {
    id: transactions.length + 1,
    ...req.body,
  };
  transactions.push(newTransaction);
  res.status(201).json(newTransaction);
};