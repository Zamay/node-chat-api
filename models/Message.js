const {Schema, model} = require('mongoose')

// userId: string;
// avatar: string;
// user: string;
// text: string;
// createdAt: string;
// editedAt?: string;
// isLiked?: boolean;

const Message = new Schema({
  text: {type: String, required: true},
}, { timestamps: true })

module.exports = model('Message', Message)
