import { Meteor } from 'meteor/meteor';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Template } from 'meteor/templating';

import './stage.html';

Template.stages.onCreated(function stagesOnCreated() {
  this.state = new ReactiveDict();
  this.state.set('stage', []);
});

Template.stages.helpers({
  stages() {
    const instance = Template.instance();
    return instance.state.get('stage');
  },
});

Template.stages.events({
  'click .add-stage'(event, instance){
    let stages = instance.state.get('stage');
    stage.push({'stageNumber': stage.length + 1});
    instance.state.set('stage', stage);
  },
});
