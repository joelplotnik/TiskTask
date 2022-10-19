const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne(
    //   {
    //     name: 'Joel',
    //     age: 37,
    //   },
    //   (error, result) => {
    // if (error) {
    //   return console.log('Unable to insert user');
    // }

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
  }
);
