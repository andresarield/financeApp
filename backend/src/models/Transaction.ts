import mongoose from 'mongoose';

interface TransactionDocument extends mongoose.Document {
  description: string;
  amount: number;
  category: string;
  date: Date;
  user: mongoose.Types.ObjectId;
}

const transactionSchema = new mongoose.Schema({
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model<TransactionDocument>('Transaction', transactionSchema);