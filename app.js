var app = angular.module("myApp",["ui.bootstrap","ngRoute"]);
app.config(function($routeProvider){
  $routeProvider.when('/display',{
    controller:"displayCtrl",
    templateUrl:"views/display.html"
  })
  .when("/carousel",{
    controller:"carouselCtrl",
    templateUrl:"views/carousel.html"
  })
  .otherwise ({
    redirectTo:"/display"

  });
});
