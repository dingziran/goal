var app=angular.module('project',[]);
app.config(function($stateProvider) {
    $stateProvider
        .state('project', {
            url: "/project",
            templateUrl: "app/project/project.html"
        });
});