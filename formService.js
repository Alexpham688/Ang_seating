var app = angular.module("myApp");
app.factory("formService", function($http){
  var formArray = [];
  function addToSeat(item){
  console.log(item);
  formArray.push(item);
};
  function getSeatArray(){
    return formArray
  };
  return {
    addToSeat:addToSeat ,
    getSeatArray:getSeatArray
  }
});
