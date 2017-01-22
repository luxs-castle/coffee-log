import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Brews = new Mongo.Collection('brew');

Meteor.methods({
  'brew.create'(bean, apparatus, grindSetting, beanMass, waterMass, waterTemp, stages, tastingNotes, techNotes){

    Brews.insert({
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
      bean: bean,
      apparatus: apparatus,
      grindSetting: grindSetting,
      beanMass: beanMass,
      waterMass: waterMass,
      waterTemp: waterTemp,
      stages: stages,
      tastingNotes: tastingNotes,
      techNotes: techNotes
    });
  },
})
