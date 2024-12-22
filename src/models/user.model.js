'use strict';
const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      sparse: true,
      validate: {
        validator: isEmail,
        message: '{VALUE} is not a valid email',
        isAsync: false,
      },
      required: [true, 'Email required'],
    },
    password: {
      type: String,
      trim: true,
      select: false,
      match: [
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
        'Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters.',
      ],
      required: [true, 'Password required'],
    },
  },
  {
    timestamps: true,
    strictQuery: true,
    optimisticConcurrency: true,
    strict: true,
  },
);

const UserModel = model('User', userSchema);

module.exports = UserModel;
