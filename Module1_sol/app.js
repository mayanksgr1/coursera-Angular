(function () {
  'use strict';
  
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.dish = '';
    $scope.Message = '';
    $scope.Check = function ()
    {
      let dishes = $scope.dish.split(',');
      let counter = 0;

      dishes.forEach((item) => {
        if (item != false) {
            counter++;
        }
      });

      if (counter > 0 && counter < 4) {
        $scope.Message = 'Enjoy!';
      } 
      else if (counter >= 4) {
        $scope.Message = 'Too much!';
      } 
      else {
        $scope.Message = 'Please enter data first';
      }
    };

    
    
  }
  
  })();
  