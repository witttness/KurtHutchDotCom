;(function() {

  'use strict';

  angular
    .module('auth0.lock', [])
    .provider('lock', lock);
  
  function lock() {
    if (typeof Auth0Lock !== 'function') {
      throw new Error('Auth0Lock must be loaded.');
    }

    this.init = function(config) {
      if (!config) {
        throw new Error('clientID and domain must be provided to lock');
      }
      this.clientID = config.clientID;
      this.domain = config.domain;
      this.options = config.options || {};
    }

    this.$inject = ['$rootScope'];

    this.$get = function($rootScope) {

      var Lock = new Auth0Lock(this.clientID, this.domain, this.options);
      var lock = {};
      var functions = [];
      for (var i in Lock) {
        if(typeof Lock[i] === 'function') {
          functions.push(i);
        }
      }

      function safeApply(fn) {
        var phase = $rootScope.$root.$$phase;
        if(phase === '$apply' || phase === '$digest') {
          if(fn && (typeof(fn) === 'function')) {
            fn();
          }
        } else {
          $rootScope.$apply(fn);
        }
      }

      function wrapArguments(parameters) {
        var lastIndex = parameters.length - 1,
          func = parameters[lastIndex];
        if(typeof func === 'function') {
          parameters[lastIndex] = function() {
            var args = arguments;
            safeApply(function() {
              func.apply(Lock, args)
            })
          }
        }
        return parameters;
      }

      for (var i = 0; i < functions.length; i++) {
        lock[functions[i]]  = (function(name){
          var customFunction = function() {
            return Lock[name].apply(Lock, wrapArguments(arguments) );
          };
          return customFunction;
        })(functions[i]);
      }
      return lock;
    }
  }
})();