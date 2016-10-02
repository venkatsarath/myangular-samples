(function(){
  'use strict';
  angular.module("myFirstApp",[])
  .controller("MyFirstController",function($scope){
    $scope.name="Sarath";
  })
  .controller("NameCalculator",function($scope){
    $scope.name ="";
    $scope.numericValue =0;
    $scope.displayNumeric = function(){
      var totalValue = calculateTotalvalue($scope.name);
      $scope.numericValue = totalValue;
    }
  })

  function calculateTotalvalue(string){
      var totalStringValue = 0;
      for(var i=0;i<string.length;i++){
        totalStringValue +=string.charCodeAt(i);
      }
      return totalStringValue;
  }
})();
