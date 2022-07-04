const Message = require('../models/User')

const handleError = (res, error) => {
  res.status(500).send(error.message);
}

const getMessages = (req, res) => {
  Message
    .find()
    .then((posts) => res.status(200).json(posts))
    .catch((error) => handleError(res, error));
}

const addMessage = (req, res) => {
  const {text} = req.body;
  const message = new Message({text});
  message
    .save()
    .then((post) => res.status(200).json(post))
    .catch((error) => handleError(res, error));
}

const editMessage = (req, res) => {

}

const deleteMessage = (req, res) => {
  const {id} = req.params;
  Message
    .findByIdAndDelete(id)
    .then((post) => res.status(200).json(id))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getMessages,
  addMessage,
  editMessage,
  deleteMessage,
};
