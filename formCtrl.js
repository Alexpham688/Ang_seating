var app = angular.module("myApp");
app.controller("formCtrl", function($scope){
  $scope.seatInfo = [];
  $scope.item = {
    firstName:"",lastName:"",email:"",
    phoneNumber:"",seatNumber:""};

  $scope.addItem = function(firstName, lastName,email,phoneNumber, seatNumber){
    console.log(firstName,lastName,email,phoneNumber,seatNumber);

    var sendItem = {firstName:firstName, lastName:lastName,email:email, phoneNumber:phoneNumber,seatNumber};

    $scope.seatInfo.push(sendItem)
    console.log($scope.seatInfo);

    $scope.item = {
      firstName:"",lastName:"",email:"",
      phoneNumber:"",seatNumber:""};
  };
});
