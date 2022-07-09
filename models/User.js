import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    passwordHash: { type: String, required: true },
    fullName: { type: String, required: true },
    avatarUrl: String,
    role: {
      type: String,
      default: 'USER',
      enum: ['USER', 'ADMIN'],
      immutable: true
    }
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('User', UserSchema);
