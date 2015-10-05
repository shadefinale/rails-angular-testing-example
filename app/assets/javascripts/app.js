var app = angular.module("bcrud", ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/index');

    $stateProvider
      .state('index', {
        url: '/index',
        templateUrl: 'templates/index.html',
        controller: 'IndexCtrl'
      })
      .state('show', {
        url: '/show/:id',
        templateUrl: 'templates/show.html',
        controller: 'ShowCtrl'
      })
  }])
