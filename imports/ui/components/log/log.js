import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Brews } from '../../../api/brew/brew.js';

import './log.html';

Template.log.helpers({
  brews() {
    return Brews.find({}, { sort: { createdAt: -1} });
  },
});
