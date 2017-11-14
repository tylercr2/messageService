(angular.module('app').controller('loginCtrl', ['loginService', '$scope', '$location', function(loginService, $scope, $location) {

    var rtn = this;

    $scope.login = function () {
        var user = $("#login").val();
        if(!loginService.loginUser(user)) {
            console.log("Error logging in");
        }
        else {
            $location.path('/messages');
        }
    }

}]));