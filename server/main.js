import { Meteor } from 'meteor/meteor';
import { TasksCollection } from "/imports/api/TasksCollection";

const insertTask = taskText => TasksCollection.insert({ text: taskText }); 

Meteor.startup(() => {
  // code to run on server at startup
  if (TasksCollection.find().count() === 0) {
    [
      'Meteor with blaze tutorial',
      'Meteor with react tutorial',
      'Elecron.js',
      'Cordova.js',
      'e2e vs unit tests',
      'Mocha testing',
      'Trillo',
      'AWS build demo'
    ].forEach(insertTask)
  }
});
