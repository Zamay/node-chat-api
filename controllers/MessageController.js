import MessageModel from '../models/Message.js';

export const getAll = async (req, res) => {
  try {
    //TODO: якщо юзер null, то помилка. Виправити
    const messages = await MessageModel.find().populate('user').exec();

    const messagesData = messages.map(message => {
      const { user } = message._doc;
      const { passwordHash, createdAt, updatedAt, __v, ...userData } = user._doc;
      message._doc.user = userData;
      return message;
    });

    res.json(messagesData);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не вдалося отримати повідомлення',
    });
  }
};

export const toggleIsLike = async (req, res) => {
  try {
    const message = await MessageModel.findById(req.params.id);

    if (!message) {
      return res.status(404).json({
        message: 'Повідомлення не знайдено',
      });
    }

    await MessageModel.updateOne(
      {
        _id: req.params.id,
      },
      {
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        isLike: !message.isLike,
        user: req.userId,
      },
    );

    res.json({
      success: true,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить сообщения',
    });
  }
};

export const remove = async (req, res) => {
  try {
    const messageId = req.params.id;

    MessageModel.findOneAndDelete(
      {
        _id: messageId,
      },
      (err, doc) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: 'Неможливо видалити повідомлення',
          });
        }

        if (!doc) {
          return res.status(404).json({
            message: 'Повідомлення не знайдено',
          });
        }

        res.json({
          success: true,
        });
      },
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не вдалося отримати повідомлення',
    });
  }
};

export const create = async (req, res) => {
  try {
    const doc = new MessageModel({
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      isLike: req.body.isLike,
      user: req.userId,
    });

    const message = await (await doc.save()).populate('user');

    const { user } = message._doc;
    const { passwordHash, createdAt, updatedAt, __v, ...userData } = user._doc;
    message._doc.user = userData;

    res.json(message);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не вдалося створити повідомлення',
    });
  }
};

export const update = async (req, res) => {
  try {
    const messageId = req.params.id;

    await MessageModel.updateOne(
      {
        _id: messageId,
      },
      {
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        isLike: req.body.isLike,
        user: req.userId,
      },
    );

    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не вдалося оновити повідомлення',
    });
  }
};
