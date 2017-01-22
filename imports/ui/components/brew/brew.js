import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Brew } from '../../../api/brew/brew.js';

import './brew.html';
import './stage.html';

Template.brew.onCreated(function stagesOnCreated() {
  this.state = new ReactiveDict();
  this.state.set('stages', []);
});

Template.brew.helpers({
  stages() {
    const instance = Template.instance();
    return instance.state.get('stages');
  },
});

Template.brew.events({
  'submit .brew-form'(event, instance){
    event.preventDefault();

    const target = event.target;
    const bean = target.bean.value;
    const apparatus = target.apparatus.value;
    const grindSetting = target.grindSetting.value;
    const beanMass= target.beanMass.value;
    const waterMass = target.waterMass.value;
    const waterTemp = target.waterTemp.value;
    const tastingNotes = target.tastingNotes.value;
    const techNotes = target.techNotes.value;
    //lodash_for : each loop map reduce
    const stages = getStageData(instance.state.get('stages'), target);

    Meteor.call('brew.create', bean, apparatus, grindSetting,
    beanMass, waterMass, waterTemp, stages, tastingNotes, techNotes);

    target.reset();
  },
  'click .add-stage'(event, instance){
    const target = event.target;
    let stages = instance.state.get('stages');
    //for each time and water in stage, get and set value from form
    let formValues =

    stages.push({'stageNumber': stages.length + 1});
    instance.state.set('stages', stages);
  },

  'click .remove-stage'(event, instance){
    let stages = instance.state.get('stages');
    stages.pop();
    instance.state.set('stages', stages);
  },

});

function getStageData(stages, form) {
  return stages.map(function(stage) {
    if (form['water' + stage.stageNumber]
        && form['time' + stage.stageNumber]) {
      return [form['water' + stage.stageNumber].value,
              form['time' + stage.stageNumber].value];
    }
  });
}
