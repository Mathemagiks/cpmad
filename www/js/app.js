angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

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

  $stateProvider

  // Define a parent state for the tabs
  .state('tabs', {
    url: '/tabs',
    templateUrl: 'templates/tabs.html',
    abstract:true
  })

  // Define a child state for the gallery tab
  .state('tabs.gallery', {
    url: '/gallery',
    views: {
      'gallery': {
        templateUrl: 'templates/gallery.html',
        controller: 'GalleryCtrl'
      }
    }
  })

  // Define a child state for the snap-it tab
  .state('tabs.camera', {
    url: '/camera',
    views: {
      'camera': {
        templateUrl: 'templates/camera.html',
        controller: 'CameraCtrl'
      }
    }
  })

  // Define a child state for the cloud tab
  .state('tabs.cloud', {
    url: '/cloud',
    views: {
      'cloud': {
        templateUrl: 'templates/cloud.html',
        controller: 'CloudCtrl'
      }
    }
  })

  // Define a state for the login
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

// urlRouterProvider provides a default route to the gallery view
$urlRouterProvider.otherwise('/tabs/gallery')

});
