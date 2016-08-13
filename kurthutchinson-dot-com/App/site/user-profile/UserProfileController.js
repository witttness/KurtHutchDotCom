(function () {
    'use strict';

    angular
      .module('app')
      .controller('UserProfileController', UserProfileController);

    UserProfileController.$inject = ['$scope', '$state', '$log', 'auth'];

    function UserProfileController($scope, $state, $log, auth) {
        if (!auth.isAuthenticated) {
            $state.go("login");
            return;
        }

        $scope.auth = auth;

        activate();

        function activate() { }
    }
})();
