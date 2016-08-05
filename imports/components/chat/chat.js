import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './chat.html';
import { Meteor } from 'meteor/meteor';
import { Messages } from '../../api/messages.js';

class ChatCtrl {
  constructor($scope) {
    $scope.viewModel(this);

    this.subscribe('messages');

    this.helpers({
      messages() {
        return Messages.find({});
      },
      currentUser() {
        return Meteor.user();
      }

    })
  }

  addMessage(newMessage) {
    // Insert a task into the collection
    Meteor.call('messages.insert', newMessage);

    // Clear form
    this.newMessage = '';
  }

}

export default angular.module('chat', [
  angularMeteor
  ])
.component('chat', {
  templateUrl: 'imports/components/chat/chat.html',
  controller: ['$scope', ChatCtrl]
});