(
  function(){
  'use strict';

  angular.module("MyNameCalculate",[])
  .controller("MyNameCalculateController",function($scope){
    $scope.name = "",
    $scope.totalCount = 0
    $scope.calculateTotalCount = function()
    {
      var totalNumericValue = 0;
      totalNumericValue = calculate($scope.name);
      $scope.totalCount = totalNumericValue;
    }

    function calculate(string){
      var totalStringValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      }
  
      return totalStringValue;
    }
  });
})();