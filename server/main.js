import { Meteor } from 'meteor/meteor';
import { Accounts } from "meteor/accounts-base";
import { TasksCollection } from "/imports/api/TasksCollection";

const insertTask = (taskText, user) => 
  TasksCollection.insert({
    text: taskText,
    userId: user._id,
    createdAt: new Date(),
  });

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";

Meteor.startup(() => {
  // code to run on server at startup
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
  const user = Accounts.findUserByUsername(SEED_USERNAME);

  if (TasksCollection.find().count() === 0) {
    [
      'Meteor with blaze tutorial',
      'Meteor with react tutorial',
      'Elecron.js',
      'Cordova.js',
      'e2e vs unit tests',
      'Mocha testing',
      'Trello',
      'AWS build demo'
    ].forEach(taskTest => insertTask(taskTest, user));
  }
});
