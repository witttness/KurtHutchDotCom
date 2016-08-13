(function () {
    'use strict';

    angular
      .module('app')
      .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$location', 'auth', 'store'];

    function AppController($scope, $location, auth, store) {
        angular.extend($scope, {
            dynamicCss: "div { outline: 1px solid red; }"
        });

        $scope.isAuthenticated = isAuthenticated;
        $scope.login = login;
        $scope.logout = logout;

        activate();

        function activate() {

            $scope.$on('$routeChangeSuccess', function (e, nextRoute) {
                if (nextRoute.$$route && angular.isDefined(nextRoute.$$route.pageTitle)) {
                    $scope.pageTitle = nextRoute.$$route.pageTitle + ' | Auth0 Sample';
                }
            });

        }

        function isAuthenticated() {
            return auth.isAuthenticated;
        }

        function login() {
            $location.path("/login");
        }

        function logout() {
            auth.signout();
            store.remove('profile');
            store.remove('token');
            $location.path('/');
        }
    }
})();
