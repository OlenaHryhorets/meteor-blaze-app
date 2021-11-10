import { Template } from "meteor/templating";

import { TasksCollection } from "../api/TasksCollection";

import "./Task.html";

Template.task.events({
    "click .toggle-checked"() {
        // set the checked property to the opposite of its current value
        TasksCollection.update(this._id, {
        $set: { isChecked: !this.isChecked },
        });
    },
    "click .delete"() {
        TasksCollection.remove(this._id);
    },
});

Template.form.events({
  "submit .task-form"(event) {
    // prevent default browser form submit
    event.preventDefault();

    // get value from form element
    const target = event.target;
    const text = target.text.value;

    // insert a task into the collection
    TasksCollection.insert({
      text,
      createdAt: new Date(), // current time
      isChecked: false,
    });

    // clear form
    target.text.value = "";
  },
});
