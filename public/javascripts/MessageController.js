(angular.module('app').controller('messageCtrl', ['loginService', '$scope', '$http', function(loginService, $scope, $http) {

    var rtn = this;

    $scope.getMessages = function(user) {
        var route = '/message/' + user;
        $http.get(route).then(function (resp) {
            rtn.messages = resp;
        });
    }

    $scope.postMessage = function(message) {
        var route = '/message';
        $.ajax({
            url: route,
            type: 'POST',
            data: message,
            success: function (data, textStatus) {
                console.log("Status: ", textStatus);
            }
        });
    }

    $scope.getMessages(loginService.getUser());


}]));