const express = require('express');
const {getUsers, addUser, editUser, deleteUser} = require('../controllers/user-controller');

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', addUser);
router.put('/users/:id', editUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
