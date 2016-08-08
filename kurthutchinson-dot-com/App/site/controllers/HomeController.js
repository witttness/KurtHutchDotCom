(function () {
    'use strict';

    angular
      .module('app')
      .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope) {
        /* jshint validthis:true */
        var vm = this;

        vm.title = '';

        activate();

        function activate() { }
    }
})();
