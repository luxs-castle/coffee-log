import { Meteor } from 'meteor/meteor';

import './apparatusCreate.html';
import './apparatusCreate.css';

Template.apparatusCreate.viewmodel({
  apparatusName: '',
  submitApparatus: function(event) {
    event.preventDefault();
    Meteor.call('apparatus.create', this.apparatusName());
  }
});
