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
            "auth0",
            "angular-storage",
            "angular-jwt"
        ])
        .constant("_", window._)
        .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", "$httpProvider", "authProvider", "jwtInterceptorProvider",
            function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, authProvider, jwtInterceptorProvider) {
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
                    .state("login", {
                        url: "/login",
                        templateUrl: "/App/site/login/index.html",
                        controller: "LoginController",
                        data: {
                            displayName: "Login"
                        }
                    })
                    .state("user-profile", {
                        url: "/user-profile",
                        templateUrl: "/App/site/user-profile/index.html",
                        controller: "UserProfileController",
                        data: {
                            displayName: "User Profile"
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
                    });

                authProvider.init({
                    domain: AUTH0_DOMAIN,
                    clientID: AUTH0_CLIENT_ID,
                    callbackURL: "/user-profile",
                    loginState: 'login'
                });

                //Called when login is successful
                authProvider.on('loginSuccess', ["$log", "$state", "profilePromise", "idToken", "store", function ($log, $state, profilePromise, idToken, store) {
                    $log.info("Login Success");
                    profilePromise.then(function (profile) {
                        store.set('profile', profile);
                        store.set('token', idToken);
                    });
                    //$location.path('/');
                    $state.go("user-profile");
                }]);

                authProvider.on('loginFailure', ["$log", function ($log) {
                    //alert("Error");
                    $log.error("Error loggin in!");
                }]);

                authProvider.on('authenticated', ["$location", "$log", function ($location, $log) {
                    $log.info("Authenticated");

                }]);

                jwtInterceptorProvider.tokenGetter = ["store", function (store) {
                    return store.get('token');
                }];

                // Add a simple interceptor that will fetch all requests and add the jwt token to its authorization header.
                // NOTE: in case you are calling APIs which expect a token signed with a different secret, you might
                // want to check the delegation-token example
                $httpProvider.interceptors.push('jwtInterceptor');
            }])
        .run(["$rootScope", function ($rootScope) {
            $rootScope._ = window._;
        }])
        .run(['auth', function (auth) {
            // This hooks all auth events to check everything as soon as the app starts
            auth.hookEvents();
        }])
        .run(["$rootScope", "$location", "auth", "store", "jwtHelper", function ($rootScope, $location, auth, store, jwtHelper) {
            $rootScope.$on('$locationChangeStart', function () {

                var token = store.get('token');
                if (token) {
                    if (!jwtHelper.isTokenExpired(token)) {
                        if (!auth.isAuthenticated) {
                            //Re-authenticate user if token is valid
                            auth.authenticate(store.get('profile'), token);
                        }
                    } else {
                        // Either show the login page or use the refresh token to get a new idToken
                        //$location.path('/');
                        $state.go("login");
                    }
                }
            });
        }]);
})();