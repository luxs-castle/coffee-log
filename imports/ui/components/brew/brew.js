import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './brew.html';
import './brew.css';

Template.brew.viewmodel({
  apparatus: '',
  bean: '',
  grindSetting: '',
  beanMass: '',
  waterMass: '',
  waterTemp: '',
  tastingNotes: '',
  techNotes: '',
  stages: [{name: 'Brew', water: '', time: ''}],
  onCreated: function() {
    // workaround for persistence bug where first stage values persist on nav
    this.stages().pop();
    this.stages().push({name: 'Brew', water: '', time: ''});
  },
  addStage: function(event) {
    event.preventDefault();
    this.stages().push(
      {name: 'Stage ' + (this.stages().length + 1), water: '', time: ''});
    this.renameStages();
  },
  removeStage: function(stage) {
    this.stages().remove(stage);
    this.renameStages();
  },
  renameStages: function() {
    if(this.stages().length == 1) {
      this.stages()[0].name = 'Brew';
    }
    else if (this.stages().length == 2) {
      this.stages()[0].name = 'De-Gas';
      this.stages()[1].name = 'Brew';
    }
    else {
      this.stages()[0].name = 'De-Gas';
      for (let i = 1; i < this.stages().length; i++) {
        this.stages()[i].name = 'Stage ' + i;
      }
    }
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
