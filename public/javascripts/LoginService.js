angular.module('app').factory('loginService', function() {

    var rtn = this;

    function login(user) {
        if(user) {
            rtn.user = user;
        }

        return false;
    }

    return {

        loginUser: function (user) {
            return login(user);
        },

        getUser: function() {
            return rtn.user;
        }
    }

});