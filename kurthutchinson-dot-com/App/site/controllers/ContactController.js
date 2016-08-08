(function () {
    'use strict';

    angular
      .module('app')
      .controller('ContactController', ['$scope', ContactController]);

    function ContactController($scope) {
        var vm = this;

        vm.title = '';

        activate();

        function activate() { }
    }
})();
