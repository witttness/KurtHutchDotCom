(function () {
    'use strict';

    angular
      .module('app')
      .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', 'auth'];

    function LoginController($scope, auth) {
        $scope.auth = auth;
        window.auth = auth;
    }
})();
