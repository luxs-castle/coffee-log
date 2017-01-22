import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import '../../ui/layouts/coffee-log-body.js';
import '../../ui/components/navbar/navbar.js';
import '../../ui/pages/brew/brew-page.js';
import '../../ui/pages/log/log-page.js';
import '../../ui/pages/inventory/inventory-page.js'
import '../../ui/pages/inventory/beans/beans-page.js'

FlowRouter.route('/', {
  name: 'CoffeeLog.home',
  action() {
    BlazeLayout.render('coffeeLogBody', { nav: 'navbar', main: 'brewPage'})
  },
});

FlowRouter.route('/brew', {
  name: 'CoffeeLog.brew',
  action() {
    BlazeLayout.render('coffeeLogBody', { nav: 'navbar', main: 'brewPage'})
  },
});

FlowRouter.route('/log', {
  name: 'CoffeeLog.log',
  action() {
    BlazeLayout.render('coffeeLogBody', { nav: 'navbar', main: 'logPage'})
  },
});

var inventory = FlowRouter.group({
  prefix: "/inventory"
});

inventory.route('/', {
  name: 'CoffeeLog.inventory',
  action() {
    BlazeLayout.render('coffeeLogBody', { nav: 'navbar', main: 'inventoryPage'})
  },
});

inventory.route('/beans', {
  name: 'CoffeeLog.inventory.beans',
  action() {
      BlazeLayout.render('coffeeLogBody', { nav: 'navbar', main: 'beansPage'})
  },
});
