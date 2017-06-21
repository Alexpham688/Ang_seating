var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider.when('/display',{
    templateUrl:"views/display.html",
  })
  .otherwise ({
    redirectTo:'/'
  });
});
