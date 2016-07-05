angular.module('angularSeed')
.config(function ($stateProvider) {
  $stateProvider
    .state('todo', {
      url: '/todo',
      controller: 'TodoCtrl',
      templateUrl: 'client/templates/todo.html'
    })
});
