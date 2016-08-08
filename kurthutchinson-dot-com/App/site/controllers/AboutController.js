(function () {
    'use strict';

    angular
      .module('app')
      .controller('AboutController', AboutController);

    AboutController.$inject = ['$scope'];

    function AboutController($scope) {
        /* jshint validthis:true */
        var vm = this;

        vm.title = '';

        activate();

        function activate() { }
    }
})();
