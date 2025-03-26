import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

interface UserDocument extends mongoose.Document {
  username: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

// Método para comparar contraseñas
userSchema.methods.comparePassword = async function (candidatePassword: string) {
  return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model<UserDocument>('User', userSchema);