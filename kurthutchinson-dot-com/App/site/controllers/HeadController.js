(function () {
    'use strict';

    angular
      .module('app')
      .controller('HeadController', HeadController);

    HeadController.$inject = ['$scope'];

    function HeadController($scope) {
        angular.extend($scope, {
            dynamicCss: "div { outline: 1px solid red; }"
        });

        activate();

        function activate() { }
    }
})();
