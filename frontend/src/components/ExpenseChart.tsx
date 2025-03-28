import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import api from '../services/api';

const ExpenseChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get('/transactions');
      const formattedData = res.data.map((t) => ({
        category: t.category,
        total: t.amount,
      }));
      setData(formattedData);
    };
    fetchData();
  }, []);

  return (
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="category" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="total" fill="#8884d8" />
    </BarChart>
  );
};

export default ExpenseChart;