var app=angular.module('skill',[]);
app.config(function($stateProvider) {
    $stateProvider
        .state('skill', {
            url: "/skill",
            templateUrl: "app/skill/skill.html",
            resolve:{
                projects:function(ProjectService){
                    return ProjectService.getProjects();
                }
            },
            controller:function($scope,$state,$stateParams,projects,ProjectService){
                $scope.projects=projects;
                $scope.newProject={};
                $scope.add=function(project){
                    ProjectService.createProject(project).then(function(){
                        $state.transitionTo($state.current, $stateParams, {
                            reload: true,
                            inherit: false,
                            notify: true
                        });
                    });
                };
                $scope.delete=function(project){
                    ProjectService.deleteProject(project._id.$oid).then(function(){
                        $state.transitionTo($state.current, $stateParams, {
                            reload: true,
                            inherit: false,
                            notify: true
                        });
                    });
                }
            }
        });
});

app.factory('SkillService',function(MongodbService){
    var collection="/purpose";
    var service={
        getPurpose:function(){
            var url=MongodbService.getDatabase()+collection+"?"+MongodbService.getApiKey();
            return MongodbService.get(url);
        },
        createPurpose:function(data){
            var url=MongodbService.getDatabase()+collection+"?"+MongodbService.getApiKey();
            return MongodbService.post(url,data);
        },
        deletePurpose:function(id){
            var url=MongodbService.getDatabase()+collection+"/"+id+"?"+MongodbService.getApiKey();
            return MongodbService.delete(url);
        }
    };
    return service;
});