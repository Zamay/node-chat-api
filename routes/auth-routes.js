const express = require('express');
const {getUsers, addUser, editUser, deleteUser} = require('../controllers/user-controller');

const router = express.Router();

router.get('/', getUsers);
router.post('/', addUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);

module.exports = router;
