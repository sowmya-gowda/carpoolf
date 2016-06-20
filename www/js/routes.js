angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('aBOUT', {
    url: '/page2',
    templateUrl: 'templates/aBOUT.html',
    controller: 'aBOUTCtrl'
  })

  .state('userLogin', {
    url: '/page3',
    templateUrl: 'templates/userLogin.html',
    controller: 'userLoginCtrl'
  })

  .state('sIGNUP', {
    url: '/page4',
    templateUrl: 'templates/sIGNUP.html',
    controller: 'sIGNUPCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('carBookie', {
    url: '/page5',
    templateUrl: 'templates/carBookie.html',
    controller: 'carBookieCtrl'
  })

  .state('cARPOOL', {
    url: '/page6',
    templateUrl: 'templates/cARPOOL.html',
    controller: 'cARPOOLCtrl'
  })

  .state('dETAILS', {
    url: '/page7',
    templateUrl: 'templates/dETAILS.html',
    controller: 'dETAILSCtrl'
  })

  .state('cABOWNER', {
    url: '/page8',
    templateUrl: 'templates/cABOWNER.html',
    controller: 'cABOWNERCtrl'
  })

  .state('viewBooking', {
    url: '/page9',
    templateUrl: 'templates/viewBooking.html',
    controller: 'viewBookingCtrl'
  })

  .state('profile', {
    url: '/page11',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('customerDetails', {
    url: '/page12',
    templateUrl: 'templates/customerDetails.html',
    controller: 'customerDetailsCtrl'
  })

  .state('cARPOOL2', {
    url: '/page13',
    templateUrl: 'templates/cARPOOL2.html',
    controller: 'cARPOOL2Ctrl'
  })

$urlRouterProvider.otherwise('/page13')

  

});