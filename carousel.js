var app = angular.module("myApp",["ui.bootstrap","ngRoute"]);
app.controller("carouselCtrl",function carouselCtrl($scope){
  $scope.myInterval = 3200;
  $scope.slides = [
    {
      image: "http://lorempixel.com/800/400/nature"
    },
    { image:
      "http://lorempixel.com/800/400/sports"
    },
    {
      image:
      "http://lorempixel.com/800/400/city"
    } ,
    {
      image:
      "http://lorempixel.com/800/400/people"
    },
    {
      image:
      "http://lorempixel.com/800/400/business"
    } ,
    {
      image:
      "http://lorempixel.com/800/400/technics"
    } ,
    ];
});
