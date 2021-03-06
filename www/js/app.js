// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('scorely', ['ionic','LocalStorageModule'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('scorely');
  })


app.controller('main', function ($scope, $ionicModal, localStorageService) { //store the entities name in a variable var taskData = 'task';

//initialize the tasks scope with empty array
$scope.tasks = [];

//initialize the task scope with empty object
$scope.task = {};

//configure the ionic modal before use
$ionicModal.fromTemplateUrl('new-task-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
}).then(function (modal) {
    $scope.newTaskModal = modal;
});

$scope.getTasks = function () {
    //fetches task from local storage
    
}
$scope.createTask = function () {
    //creates a new task
    
}
$scope.removeTask = function () {
    //removes a task
    
}
$scope.completeTask = function () {
    //updates a task as completed
    
}
})