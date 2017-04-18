import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Apparatuses } from '../../../api/apparatus/apparatus.js';

import './apparatusList.html';
import './apparatusList.css';
import './apparatus.js';

Template.apparatusList.helpers({
  apparatuses() {
    return Apparatuses.find({}, { sort: { createdAt: -1} });
  },
});
