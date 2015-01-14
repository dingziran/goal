var app=angular.module('skill',[]);
app.config(function($stateProvider) {
    $stateProvider
        .state('skill', {
            url: "/skill",
            templateUrl: "app/skill/skill.html"
        });
});