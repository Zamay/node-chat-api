import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    isLike: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Messages', MessageSchema);
