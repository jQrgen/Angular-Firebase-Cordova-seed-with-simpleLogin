'use strict';

angular.module('devApp')
  .controller('LoginController', function($scope, simpleLogin, $location) {
    $scope.pass = null;
    $scope.err = null;
    $scope.user = null;

    $scope.login = function(service) {
      simpleLogin.login(service, function(err) {
        $scope.err = err? err + '' : $location.path('#/main');
      });

    };

   $scope.logout = simpleLogin.logout;

  });
