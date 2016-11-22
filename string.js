app.controller('girlsCtrl', function($scope) {
  $scope.girlsWhoHaveRejectedMe = ['Lucy', 'Yael', 'Jillian', 'Sofie'];
  $scope.addToArray = function(){
    $scope.girlsWhoHaveRejectedMe.push($scope.inputToAddToArray);
  $scope.removeFromArray = function () {
    console.log("hi");
    $scope.girlsWhoHaveRejectedMe.click.remove();
  };
  };
});