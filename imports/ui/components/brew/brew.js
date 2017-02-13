import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './brew.html';

Template.brew.viewmodel({
  apparatus: '',
  bean: '',
  grindSetting: '',
  beanMass: '',
  waterMass: '',
  waterTemp: '',
  tastingNotes: '',
  techNotes: '',
  stages: [{name: 'Stage 1', water: '', time: ''}],
  onCreated: function() {
    // workaround for persistence bug where first stage values persist on nav
    this.stages().pop();
    this.stages().push({name: 'Stage 1', water: '', time: ''});
  },
  addStage: function(event) {
    event.preventDefault();
    this.stages().push(
      {name: 'Stage ' + (this.stages().length + 1), water: '', time: ''});
  },
  removeStage: function(event) {
    event.preventDefault();
    this.stages().pop();
  },
  submitBrew: function(event) {
    event.preventDefault();
    Meteor.call('brew.create', this.bean(), this.apparatus(),
      this.grindSetting(), this.beanMass(), this.waterMass(), this.waterTemp(),
      Object.keys(this.stages())
        .filter(key => !isNaN(key))
        .map(key => this.stages()[key]),
      this.tastingNotes(), this.techNotes());
    FlowRouter.go('CoffeeLog.log');
  }
});
