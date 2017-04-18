import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Apparatuses = new Mongo.Collection('apparatus');

Meteor.methods({
  'apparatus.create'(apparatusName){
    Apparatuses.insert({
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
      apparatusName: apparatusName
    });
  }
})
