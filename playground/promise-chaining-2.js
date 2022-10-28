require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('63570bc38586838cea94eaad')
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('6358140c3fd5caff580290bc')
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
