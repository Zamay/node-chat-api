const User = require('../models/User')

const handleError = (res, error) => {
  res.status(500).send(error.message);
}

const getUsers = (req, res) => {
  User
    .find()
    .then((posts) => res.status(200).json(posts))
    .catch((error) => handleError(res, error));
}

const addUser = (req, res) => {
  const {email, password, name} = req.body;
  const user = new User({email, password, name});
  user
    .save()
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
}

const editUser = (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  User
    .findByIdAndUpdate(id, { name })
    .then(() => res.redirect(`/`))
    .catch((error) => handleError(res, error));
}

const deleteUser = (req, res) => {
  const {id} = req.params;
  User
    .findByIdAndDelete(id)
    .then(() => res.status(200).json(id))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getUsers,
  addUser,
  editUser,
  deleteUser,
};
