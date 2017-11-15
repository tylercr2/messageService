(angular.module('app').controller('messageCtrl', ['loginService', '$scope', '$http', '$location', function(loginService, $scope, $http, $location) {

    var rtn = this;

    $scope.getMessages = function(user) {
        var route = 'message/' + user;
        $http.get(route).then(function (resp) {
            rtn.messages = resp.data;
        });
    }

    $scope.postMessage = function() {
        var message = {
            User: $scope.sendTo,
            Subject: $scope.subject,
            Message: $scope.message
        }

        var route = 'message';
        $.ajax({
            url: route,
            type: 'POST',
            data: message,
            success: function (data, textStatus) {
                console.log("Status: ", textStatus);
            }
        });

        $scope.getMessages(loginService.getUser());
    }

    $scope.checkLogin = function() {
        if(!loginService.getUser()) {
            $location.path("/login");
        }
    }

    $scope.logout = function () {
        loginService.logout();
        $location.path("/login");
    }

    $scope.checkLogin();

    $scope.getMessages(loginService.getUser());


}]));
