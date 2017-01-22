import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Brew } from '../../../api/brew/brew.js';

import './log.html';

Template.log.helpers({
  brew() {
    return Brew.find({}, { sort: { createdAt: -1} });
  },
});
