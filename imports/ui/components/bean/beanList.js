import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Beans } from '../../../api/bean/bean.js';

import './beanList.html';
import './beanList.css';
import './bean.js';

Template.beanList.helpers({
  beans() {
    return Beans.find({}, { sort: { createdAt: -1} });
  },
});
