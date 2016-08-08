(function () {
    'use strict';

    angular
      .module('app')
      .controller('PortfolioController', PortfolioController);

    PortfolioController.$inject = ['$scope'];

    function PortfolioController($scope) {
        /* jshint validthis:true */
        var vm = this;

        vm.title = '';

        activate();

        function activate() { }
    }
})();
