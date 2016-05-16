function person()
{
  this.fname;
  this.ename;
  this.mail;
};


          angular.module('myApp', []).controller
          ('namesCtrl', 
            function($scope) 
            {
             /* $scope.names = [];*/
             $scope.names=[]; 
             /* [
                {fname:'Иван',ename:'Николайчук',email:'ivan@example.com'},
                {fname:'Мария',ename:'Иванова',email:'mary@example.com'},
                {fname:'Юлия',ename:'Петренко',email:'julia@example.com'}
              ];*/
              $scope.orderByMe=function(x)
              {
                $scope.myOrderBy=x;
              }
                /*var per = new person;*/
                $scope.addItem = function ()
                 {  per = new person;

                    per.fname=$scope.fname;
                    per.ename=$scope.ename;
                    per.mail=$scope.mymail;  
                    $scope.names.push(per);
                    /*per=null;*/
                    console.log($scope,' person=',per);
                    console.log('$scope.fname,$scope.ename,$scope.mymail=',$scope.fname,$scope.ename,$scope.mymail );
                    /*console.log ('names= ', names);*/
                    console.log ('$scope= ', $scope);
                 } 
            }
          );
