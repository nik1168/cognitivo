// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('cognitivo', ['ionic','ngResource','starter.controllers','cognitivo.services'])

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
  .state('tabs', {
    url: '/tab',
    //abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
  .state('app.fuerza', {
    url: '/fuerza',
    views: {
      'menuContent': {
        templateUrl: 'templates/fuerza.html',
        controller: 'FuerzaCtrl'
      }
    }
  })
   .state('app.vital', {
    url: '/vital',
    views: {
      'menuContent': {
        templateUrl: 'templates/vital.html',
        controller: 'VitalCtrl'
      }
    }
  })
    .state('app.pirPastillero', {
    url: '/pirpastillero',
    views: {
      'menuContent': {
        templateUrl: 'templates/pirPastillero.html',
        controller: 'PastilleroCtrl'
      }
    }
  })
     .state('app.pirPrincipal', {
    url: '/pirprincipal',
    views: {
      'menuContent': {
        templateUrl: 'templates/pirPuerta.html',
        controller: 'PrincipalCtrl'
      }
    }
  })
     .state('app.gas', {
    url: '/gas',
    views: {
      'menuContent': {
        templateUrl: 'templates/gas.html',
        controller: 'GasCtrl'
      }
    }
  })
  .state('app.users', {
    url: '/users',
    views: {
      'menuContent': {
        templateUrl: 'templates/users.html',
        controller: 'UsersCtrl'
      }
    }
  })
  .state('app.addUser', {
    url: '/addUser',
    views: {
      'menuContent': {
        templateUrl: 'templates/addUser.html',
        controller: 'UsersCtrl'
      }
    }
  })
  .state('app.userdetail', {
      url: '/users/:usermobileID',
      views: {
        'menuContent': {
          templateUrl: 'templates/userdetail.html',
          controller: 'UsersCtrl'
        }
      }
    })
    .state('app.edituser', {
      url: '/users/:usermobileID/edit',
      views: {
        'menuContent': {
          templateUrl: 'templates/editUser.html',
          controller: 'UsersCtrl'
        }
      }
    })
    .state('app.pfeiffers', {
    url: '/pfeiffers',
    views: {
      'menuContent': {
        templateUrl: 'templates/pfeiffers.html',
        controller: 'PfeifferCtrl'
      }
    }
  })
  .state('app.addPfeiffer', {
    url: '/addPfeiffer',
    views: {
      'menuContent': {
        templateUrl: 'templates/addPfeiffer.html',
        controller: 'PfeifferCtrl'
      }
    }
  })
  .state('app.pfeifferdetail', {
      url: '/pfeiffers/:pfeifferID',
      views: {
        'menuContent': {
          templateUrl: 'templates/pfeifferdetail.html',
          controller: 'PfeifferCtrl'
        }
      }
    })
    .state('app.editpfeiffer', {
      url: '/pfeiffers/:pfeifferID/edit',
      views: {
        'menuContent': {
          templateUrl: 'templates/editPfeiffer.html',
          controller: 'PfeifferCtrl'
        }
      }
    })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
