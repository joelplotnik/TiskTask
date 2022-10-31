const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // grab incoming body data from postman
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

const bcrypt = require('bcryptjs');

const myFunction = async () => {
  const password = '1111111';
  const hashedPassword = await bcrypt.hash(password, 8); // 8 is a good balance between security and speed

  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare('1111111', hashedPassword);
  console.log(isMatch);
};

myFunction();
