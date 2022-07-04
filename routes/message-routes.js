const express = require('express');
const {getMessages, addMessage, editMessage, deleteMessage} = require('../controllers/message-controller');

const router = express.Router();

router.get('/', getMessages);
router.post('/', addMessage);
router.put('/:id', editMessage);
router.delete('/:id', deleteMessage);

module.exports = router;
