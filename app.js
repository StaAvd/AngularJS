function person()
{
  this.fname;
  this.ename;
  this.mail;
};

var per = new person;

         

          angular.module('myApp', []).controller
          ('namesCtrl', 
            function($scope) 
            {
              $scope.names = [];
             /* [
                {fname:'Иван',ename:'Николайчук',email:'ivan@example.com'},
                {fname:'Мария',ename:'Иванова',email:'mary@example.com'},
                {fname:'Юлия',ename:'Петренко',email:'julia@example.com'}
              ];*/
              $scope.orderByMe=function(x)
              {
                $scope.myOrderBy=x;
              }

                $scope.addItem = function ()
                 {
                    per.fname=$scope.fname;
                    per.ename=$scope.ename;
                    per.mail=$scope.mymail;  
                    $scope.names.push(per);

                    console.log($scope,' person=',per);
                    console.log('$scope.fname,$scope.ename,$scope.mymail=',$scope.fname,$scope.ename,$scope.mymail );
                    console.log ('names= ', $scope.names[1]);
                 } 
            }
          );
