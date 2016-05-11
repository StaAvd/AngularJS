          angular.module('myApp', []).controller('namesCtrl', function($scope) 
            {
              $scope.names = 
              [
                {fname:'Иван',ename:'Николайчук',email:'ivan@example.com'},
                {fname:'Мария',ename:'Иванова',email:'mary@example.com'},
                {fname:'Юлия',ename:'Петренко',email:'julia@example.com'}
              ];
              $scope.orderByMe=function(x)
              {
                $scope.myOrderBy=x;
              }
            }
        );
