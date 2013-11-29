app  = angular.module("HelloYeoman", ['ui.sortable', 'ngAnimate']);
app.controller("HelloController", function($scope, $http){
    $scope.message = "Hello message from world.";
    $scope.items = [
        {text :"info" , value: 1},
        {text :"danger" , value: 2},
        {text :"success" , value: 3},
        {text :"success" , value: 3}
    ];

    $scope.sortingLog = [];

    $scope.hide = function(item){
        item.hide= true;
    };

    $scope.addItem = function(){
        $scope.items.push( { text : "New"});
    };

    $scope.sortableOptions = {
        // called after a node is dropped
        /*
        stop: function(e, ui) {
            var logEntry = {
                ID: $scope.items.length + 1,
                Text: 'Moved element: ' + ui.item.scope().item.text
            };
            $scope.sortingLog.push(logEntry);
        }
        */
    };
});