(function () {
    'use strict';

    angular
      .module('app')
      .controller('BlogController', BlogController);

    BlogController.$inject = ['$scope'];

    function BlogController($scope) {
        /* jshint validthis:true */
        var vm = this;

        vm.title = '';

        activate();

        function activate() { }
    }
})();
