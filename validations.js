import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
];

export const registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
  body('fullName', 'Укажите имя').isLength({ min: 3 }),
  body('avatarUrl', 'Неверная ссылка на аватарку').optional().isURL(),
];

export const messageCreateValidation = [
  body('text', 'Введите текст').isLength({ min: 3 }).isString(),
  body('isLike', 'Ошибка в isLike').optional().isBoolean(),
  body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];
