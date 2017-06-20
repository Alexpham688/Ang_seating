var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider.when('/display',{
    templateUrl:"views/display.html",
  })
  .when('/form', {
    controller:"formCtrl",
    templateUrl:"views/form.html"
  })
  .otherwise ({
    redirectTo:'/index'
  });
});
