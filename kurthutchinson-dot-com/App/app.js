(function () {
    "use strict";

    angular
        .module("app", [
            // Angular modules
            "ngSanitize",
            "ngAnimate",
            "ngCookies",
            "ngTouch",
            "ngResource",
            "ngAria",

            // 3rd party Modules
            "ui.bootstrap",
            "ui.bootstrap.buttons",
            "ui.bootstrap.dropdown",
            "ui.bootstrap.popover",
            "ui.bootstrap.pagination",
            "ui.bootstrap.datepicker",
            "ui.bootstrap.typeahead",
            "ui.router",
            "ui.uploader",
            "ui.event",
            "ui.highlight",
            "ui.scrollpoint",
            "ui.validate",
        ])
        .constant("_", window._)
        .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {

            $locationProvider.html5Mode(true);

            $urlRouterProvider
                //.when("/home", "/")
                //.when("/home/index", "/")
                .otherwise("/");

            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "/App/site/views/home.html",
                    controller: "HomeController",
                    data: {
                        displayName: "Home"
                    }
                })
                .state("about", {
                    url: "/about",
                    templateUrl: "/App/site/views/about.html",
                    controller: "AboutController",
                    data: {
                        displayName: "About"
                    }
                }).state("portfolio", {
                    url: "/portfolio",
                    templateUrl: "/App/site/views/portfolio.html",
                    controller: "PortfolioController",
                    data: {
                        displayName: "Portfolio"
                    }
                }).state("blog", {
                    url: "/blog",
                    templateUrl: "/App/site/views/blog.html",
                    controller: "BlogController",
                    data: {
                        displayName: "Blog"
                    }
                }).state("contact", {
                    url: "/contact",
                    templateUrl: "/App/site/views/contact.html",
                    controller: "ContactController",
                    data: {
                        displayName: "Contact"
                    }
                })

        }])
        .run(["$rootScope", function ($rootScope) {
            $rootScope._ = window._;
        }]);
})();