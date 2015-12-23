angular.module("RDash");
"use strict";

angular.module("RDash")
.config(["$stateProvider","$urlRouterProvider", function(t,e){
  e.otherwise("/"),
  t.state("index",{
    url:"/",
    templateUrl:"templates/dashboard.html"
  })
  .state("mail",{
    url:"/mail",
    templateUrl:"templates/mail.html"
  })
  .state("github",{
    url:"/github",
    templateUrl:"templates/github.html"
  })
  .state("tables",{
    url:"/tables",
    templateUrl:"templates/tables.html"
  })
  .state("tareas",{
    url:"/tareas",
    templateUrl:"templates/tareas.html",
    controller: "todo"
  })
}]);
