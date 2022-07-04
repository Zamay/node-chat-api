const Message = require('../models/Message')

const handleError = (res, error) => {
  res.status(500).send(error.message);
}

const getMessages = (req, res) => {
  Message
    .find()
    .sort({ updatedAt: -1 })
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
  const { text } = req.body;
  const { id } = req.params;
  Message
    .findByIdAndUpdate(id, { text })
    .then(() => res.redirect(`/`))
    .catch((error) => handleError(res, error));
}

const deleteMessage = (req, res) => {
  const {id} = req.params;
  Message
    .findByIdAndDelete(id)
    .then(() => res.status(200).json(id))
    .catch((error) => handleError(res, error));
}

module.exports = {
  getMessages,
  addMessage,
  editMessage,
  deleteMessage,
};
