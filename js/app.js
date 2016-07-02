// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('app', ['ionic',
  'app.main-controller',
  'app.profile-controller'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
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

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  //  .state('tab', {
  //  url: '/tab',
  //  abstract: true,
  //  templateUrl: 'templates/tabs.html'
  //})

  // Each tab has its own nav history stack:
    .state('main.tab', {
      url:'/tab',
      views:{
        'tabs':{
          templateUrl: 'templates/tabs.html'
        }
      }
    })

    .state('main',{
      url:"/main",
      cache:'false',
      //abstract: true,
      templateUrl: "templates/main.html",
      controller: 'mainCtrl'
    })

    .state('main.mainlist', {
      url:"/mainlist",
      views:{
        'left':{
          templateUrl: 'templates/items/items-list.html'
        }
      }
    })

    .state('main.list', {
      url:"/list",
      views:{
        'itemlist':{
          templateUrl: 'templates/items/items-list.html'
        }
      }
    })

    .state('main.overview', {
      cache: 'false',
      url:"/overview",
      views:{
        'itemlist':{
          templateUrl: 'templates/items/item-overview.html'
        }
      }
    })
    .state('main.comment', {
      url:"/comment",
      views:{
        'itemlist':{
          templateUrl: 'templates/items/item-comment.html'
        }
      },
      // controller: 'testCtrl' // TODO
    })
    .state('main.detail', {
      url:"/detail",
      views:{
        'itemlist':{
          templateUrl: 'templates/items/item-detail.html'
        }
      }
    })
    .state('main.history', {
      url:"/history",
      cache:'false',
      views:{
        'itemlist':{
          templateUrl: 'templates/history/history-list.html'
        }
      }
    })
    .state('main.nearby', {
      url:"/nearby",
      views:{
        'itemlist':{
          templateUrl: 'templates/items/nearby-list.html'
        }
      }
    })
    .state('main.judgement', {
      url:"/judgement",
      views:{
        'itemlist':{
          templateUrl: 'templates/items/item-judgement.html'
        }
      }
    })
    .state('main.account-login', {
      url:"/account-login",
      views:{
        'itemlist':{
          templateUrl: 'templates/profile/account-login.html',
          controller:'loginCtrl'
        }
      }
    })
    .state('main.account-register', {
      url:"/account-register",
      views:{
        'itemlist':{
          templateUrl: 'templates/profile/account-register.html',
          controller: 'registerCtrl'
        }
      }
    })
    .state('main.profile', {
      url:"/profile",
      cache:'false',
      views:{
        'itemlist':{
          templateUrl: 'templates/profile/profile.html',
          controller: 'profileCtrl'
        }
      }
    })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main/tab');
});










