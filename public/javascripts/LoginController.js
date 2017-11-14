(angular.module('app').controller('loginCtrl', ['loginService', '$scope', function(loginService, $scope) {

    var rtn = this;

    scope.login = function (user) {
        if(!loginService.loginUser(user)) {
            console.log("Error logging in");
        }
        else {
            // redirect to message view
        }
    }

}]));