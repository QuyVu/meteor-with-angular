import angular from 'angular';
import angularMeteor from 'angular-meteor';
import chat from '../imports/components/chat/chat';
import '../imports/startup/accounts-config.js';
 
angular.module('simple-todos', [
  angularMeteor,
  chat.name,
  'accounts.ui'
]);