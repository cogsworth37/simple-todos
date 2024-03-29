import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Vue from 'vue';
import App from './App.vue';

import './main.html';

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  });
});
