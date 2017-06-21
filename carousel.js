var app = angular.module("myApp",["ui.bootstrap"]);
app.controller("carouselCtrl",function carouselCtrl($scope){
  $scope.myInterval = 4000;
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
  }
  ];
});
