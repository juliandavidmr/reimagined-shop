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
  .state("clientes",{
    url:"/clientes",
    templateUrl:"templates/clientes.html"
  })
  .state("cuentas",{
    url:"/cuentas",
    templateUrl:"templates/cuentas_pendientes.html"
  })
  .state("fc",{
    url:"/fc",
    templateUrl:"templates/factura_compra.html"
  })
  .state("fv",{
    url:"/fv",
    templateUrl:"templates/factura_venta.html"
  })
  .state("estadisticas",{
    url:"/estadisticas",
    templateUrl:"templates/estadisticas.html"
  })
  .state("proveedores",{
    url:"/proveedores",
    templateUrl:"templates/proveedores.html"
  })
  .state("tareas",{
    url:"/tareas",
    templateUrl:"templates/tareas.html",
    controller: "todo"
  })
}]);
