import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Неправильний формат пошти').isEmail(),
  body('password', 'Пароль має бути мінімум 5 символів').isLength({ min: 5 }),
];

export const registerValidation = [
  body('email', 'Неправильний формат пошти').isEmail(),
  body('password', 'Пароль має бути мінімум 5 символів').isLength({ min: 5 }),
  body('fullName', 'Вкажіть ім\'я').isLength({ min: 3 }),
  body('avatarUrl', 'Неправильне посилання на аватарку').optional().isURL(),
];

export const messageCreateValidation = [
  body('text', 'Введіть текст').isLength({ min: 1 }).isString(),
  body('isLike', 'Помилка в isLike').optional().isBoolean(),
  body('imageUrl', 'Неправильне посилання на зображення').optional().isString(),
];
