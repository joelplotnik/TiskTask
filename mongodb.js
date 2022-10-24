// // You can achieve this with destructuring (see below)
// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// // Object ID information
// const id = new ObjectID();
// console.log('Printing ID to the terminal: ' + id);
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString().length);
// console.log('Printing ID timestamp: ' + id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // *****************************************************
    // ********************* CREATE ************************
    // *****************************************************
    // db.collection('users').insertOne(
    //   {
    //     name: 'Wylder',
    //     age: 2,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops); // printing ops which is an array of documents
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Robin',
    //       age: 31,
    //     },
    //     {
    //       name: 'Poppy',
    //       age: 4,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert users!');
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       description: 'Clean the house',
    //       completed: true,
    //     },
    //     {
    //       description: 'Trim the trees',
    //       completed: false,
    //     },
    //     {
    //       description: 'Take out the trash',
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert tasks!');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // *****************************************************
    // ********************* READ **************************
    // *****************************************************
    // db.collection('users').findOne(
    //   { _id: new ObjectID('635038c05ea72f1d8c3ef053') },
    //   (error, user) => {
    //     if (error) {
    //       return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    //   }
    // );

    // // find() returns a cursor, or a pointer to where that data lives in the database
    // db.collection('users')
    //   .find({ age: 37 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection('users')
    //   .find({ age: 37 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // db.collection('tasks').findOne(
    //   { _id: new ObjectID('6350300d49433b1530b4f397') },
    //   (error, task) => {
    //     //console.log(task);
    //   }
    // );

    // db.collection('tasks')
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     console.log(tasks);
    //   });

    // *****************************************************
    // ********************* Update ************************
    // *****************************************************
    // db.collection('users')
    //   .updateOne(
    //     {
    //       _id: new ObjectID('635038c05ea72f1d8c3ef053'),
    //     },
    //     {
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection('tasks')
    //   .updateMany(
    //     {
    //       completed: false,
    //     },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // *****************************************************
    // ********************* Delete ************************
    // *****************************************************
    // db.collection('users')
    //   .deleteMany({
    //     age: 61,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection('tasks')
    //   .deleteOne({
    //     description: 'Clean the house',
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
);
