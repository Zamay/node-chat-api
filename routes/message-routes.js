const express = require('express');
const {getMessages, addMessage, editMessage, deleteMessage} = require('../controllers/message-controller');

const router = express.Router();

router.get('/posts', getMessages);
router.post('/add-post', addMessage);
router.put('/edit/:id', editMessage);
router.delete('/posts/:id', deleteMessage);

module.exports = router;
