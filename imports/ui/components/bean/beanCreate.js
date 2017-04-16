import { Meteor } from 'meteor/meteor';

import './beanCreate.html';
import './beanCreate.css';

Template.beanCreate.viewmodel({
  beanName: '',
  submitBean: function(event) {
    event.preventDefault();
    Meteor.call('bean.create', this.beanName());
  }
});
