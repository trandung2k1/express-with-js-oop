require('dotenv').config();
const express = require('express');
const UserService = require('./services/user.service');
const UserModel = require('./models/user.model');
const UserController = require('./controllers/user.controller');
const connectDB = require('./configs/db');
const app = express();
const port = 3000;
const service = new UserService(UserModel);
const controller = new UserController(service);
app.use((req, res, next) => {
  const start = process.hrtime();
  res.on('finish', () => {
    const diff = process.hrtime(start);
    const timeTaken = diff[0] * 1e3 + diff[1] * 1e-6;
    console.log(`${req.method} ${req.originalUrl} - ${timeTaken.toFixed(3)} ms`);
  });
  return next();
});

app.use((req, res, next) => {
  console.log('Middleware 2');
  return next();
});

app.get('/', async (req, res) => {
  const data = await controller.findAllUser();
  return res.json(data);
});
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {});
