require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('63570bc38586838cea94eaad')
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
