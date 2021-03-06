// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.quest', {
    url: '/quest',
    views: {
      'menuContent': {
        templateUrl: 'templates/quest.html',
        controller: 'QuestCtrl'
      }
    }
  })

  .state('app.main', {
      url: '/main',
      views: {
        'menuContent': {
          templateUrl: 'templates/main.html',
          controller: 'MainCtrl'
        }
      }
    })
  .state('app.tours', {
      url: '/tours',
      views: {
        'menuContent': {
          templateUrl: 'templates/tours.html',
          controller: 'ToursCtrl'
        }
      }
    })
  .state('app.tour', {
    url: '/tours/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/tour.html',
        controller: 'TourCtrl'
      }
    }
  })
  .state('app.tourLocation', {
    url: '/tours/:id/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/tour-location.html',
        controller: 'tourLocationCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
