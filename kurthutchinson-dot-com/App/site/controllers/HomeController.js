(function () {
    //'use strict';

    //angular
    //  .module('app')
    //  .controller('HomeController', HomeController);

    //HomeController.$inject = ['$scope'];

    //function HomeController($scope) {
    //    /* jshint validthis:true */
    //    var vm = this;

    //    vm.title = 'Hello from Home!';

    //    activate();

    //    function activate() { }
    //}

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ["$scope", "$log"];

    function HomeController($scope, $log) {

        $scope.magnificent = {
            current: 0,	// Actual slide, the starup slide as well, use it to change the current slide to another (the 0 based index of slides' array)
            slides: [
                {
                    src: 'http://www.ambwallpapers.com/wp-content/uploads/2015/04/autumn-sunset-hd-wallpaper-nature-landscape-images-autumn-wallpaper1-AMB1.jpg',
                    title: "Example slide title",
                    description: "Somewhere in the world...",
                    author: "Example author",
                    copyright: "copyright (c) owner 2015",
                    url: "#"
                },
                {
                    // Only src is required, the meta-data is reserved for future implementations
                    src: 'http://www.download-free-wallpaper.com/img39/rtiqsmtsckpbfafhtlnj.jpg',
                    title: "Example slide title",
                    description: "Somewhere in the world...",
                    author: "Example author",
                    copyright: "copyright (c) owner 2015",
                    url: "#"
                },
                {
                    src: 'http://hdwallpaperspretty.com/wp-content/gallery/wallpaper-nature-new/nature-spring-season-fresh-new-hd-wallpaper-randy-s_Nature-Spring-season-Fresh-New-Hd-Wallpaper-.jpg',
                    title: "Example slide title",
                    description: "Somewhere in the world...",
                    author: "Example author",
                    copyright: "copyright (c) owner 2015",
                    url: "#"
                }
            ],
            settings: {
                enabled: true,	// Controls if the slider is enabled (true: play, false: stop)
                interval: 10,	// Interval in seconds between each image
            }
            //mouseMove: function(e){}	// Optional event: if enabled, fires whenever the mouse is moved inside the page body
        };

        $log.info("mag", $scope.magnificent);
    }

})();
