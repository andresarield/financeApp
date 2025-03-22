import { useEffect, useState } from 'react';
import api from '../services/api';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  category: string;
  date: string;
}

const TransactionList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await api.get('/transactions', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setTransactions(res.data);
      } catch (error) {
        console.error('Error al obtener transacciones');
      }
    };
    fetchTransactions();
  }, []);

  return (
    <ul>
      {transactions.map((t) => (
        <li key={t.id}>{t.description} - ${t.amount}</li>
      ))}
    </ul>
  );
};

export default TransactionList;