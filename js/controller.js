angular.module("RDash",["ui.bootstrap","ui.router","ngCookies"]);
"use strict";

//-------------------  Controladores
function AlertsCtrl(e){
  e.alerts=[{
    type:"success",
    msg:"Thanks for visiting! Feel free to create pull requests to improve the dashboard!"
  },{
    type:"danger",
    msg:"Found a bug? Create an issue with as many details as you can."
  }],
  e.addAlert=function(){
    e.alerts.push({
      msg:"Another alert!"
    })},
    e.closeAlert=function(t){
      e.alerts.splice(t,1)}
}

angular.module("RDash")
.controller("AlertsCtrl",["$scope", AlertsCtrl])
.controller('todo', function ($scope) {
  $scope.todos = [];

  $scope.addTodo = function () {
    console.log(this.tarea);
    $scope.todos.push(this.tarea);
    this.tarea = '';
  };

  $scope.removeTodo = function (index) {
    $scope.todos.splice(index, 1);
  };

  $scope.findAllTareas = function() {
    tienda.find(function(err, tareas){
      if(!err){
        tareas.forEach(elem => {
          $scope.todos.push(elem);
          console.log(elem);
        })
      }
    });
  };
});

function MasterCtrl(t,e){
  var o=992;
  t.getWidth=function(){
    return window.innerWidth
  },
  t.$watch(t.getWidth,function(g,n){
    t.toggle=g>=o?angular.isDefined(e.get("toggle"))?e.get("toggle")?!0:!1:!0:!1}),
    t.toggleSidebar=function(){
      t.toggle=!t.toggle,e.put("toggle",t.toggle)
  },
  window.onresize=function(){
    t.$apply()
  }
}

angular.module("RDash")
.controller("MasterCtrl",["$scope","$cookieStore",MasterCtrl]);

function rdLoading(){
  var d={
    restrict:"AE",
    template:'<div class="loading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
  };
  return d
}

angular.module("RDash")
.directive("rdLoading",rdLoading);

function rdWidgetBody(){
  var d={
    requires:"^rdWidget",
    scope:{
      loading:"@?",
      classes:"@?"
    },
    transclude:!0,
    template:'<div class="widget-body" ng-class="classes"><rd-loading ng-show="loading"></rd-loading><div ng-hide="loading" class="widget-content" ng-transclude></div></div>',
    restrict:"E"
  };
  return d
}

angular.module("RDash")
.directive("rdWidgetBody",rdWidgetBody);

function rdWidgetFooter(){
  var e={
    requires:"^rdWidget",
    transclude:!0,
    template:'<div class="widget-footer" ng-transclude></div>',
    restrict:"E"
  };
  return e
}

angular.module("RDash")
.directive("rdWidgetFooter",rdWidgetFooter);

function rdWidgetTitle(){
  var i={
    requires:"^rdWidget",
    scope:{
      title:"@",
      icon:"@"
    },
    transclude:!0,
    template:'<div class="widget-header"><div class="row"><div class="pull-left"><i class="fa" ng-class="icon"></i> {{title}} </div><div class="pull-right col-xs-6 col-sm-4" ng-transclude></div></div></div>',
    restrict:"E"
  };
  return i
}

angular.module("RDash")
.directive("rdWidgetHeader",rdWidgetTitle);

function rdWidget(){
  var d={
    transclude:!0,
    template:'<div class="widget" ng-transclude></div>',
    restrict:"EA"
  };
  return d
}

angular.module("RDash").directive("rdWidget",rdWidget);
