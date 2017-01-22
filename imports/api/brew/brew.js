import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Brew = new Mongo.Collection('brew');

Meteor.methods({
  'brew.create'(bean, apparatus, grindSetting, beanMass, waterMass, waterTemp, stages, tastingNotes, techNotes){

    Brew.insert({
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
      bean, apparatus, grindSetting, beanMass, waterMass, waterTemp, stages, tastingNotes, techNotes
    });
  },
})
