import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Beans = new Mongo.Collection('bean');

Meteor.methods({
  'bean.create'(beanName){
    Beans.insert({
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
      beanName: beanName
    });
  }
})
