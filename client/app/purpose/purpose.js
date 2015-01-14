var app=angular.module('purpose',[]);
app.config(function($stateProvider) {
    $stateProvider
        .state('purpose', {
            url: "/purpose",
            templateUrl: "app/purpose/purpose.html"
        });
});