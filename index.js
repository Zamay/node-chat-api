import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';

import { loginValidation, registerValidation, messageCreateValidation } from './validations.js';
import { UserController, MessageController } from './controllers/index.js';
import { checkAuth, handleValidationErrors } from './utils/index.js';

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to DB'))
  .catch((error) => console.log(error));

const app = express();
app.use(express.json());
app.use(cors());

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);
app.get('/users', checkAuth, UserController.getAll);
app.delete('/users/:id', checkAuth, UserController.remove);

app.get('/msg', MessageController.getAll);
app.get('/msg/:id', MessageController.toggleIsLike);
app.post('/msg', checkAuth, messageCreateValidation, handleValidationErrors, MessageController.create);
app.delete('/msg/:id', checkAuth, MessageController.remove);
app.patch(
  '/msg/:id',
  checkAuth,
  messageCreateValidation,
  handleValidationErrors,
  MessageController.update,
);

app.listen(process.env.PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${process.env.PORT}`);
});
