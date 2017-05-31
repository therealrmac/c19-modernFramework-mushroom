"use strict";



app.controller("MushroomCtrl", function($scope, MushroomFactory){
    MushroomFactory.getShroom()
    .then(function(itemCollection){
        console.log("itemCollection", itemCollection);
        var x=[];
        var arrayid= Object.keys(itemCollection);
        arrayid.forEach(function(key){
            x.push(itemCollection[key]);
        });
        $scope.mushrooms= x;
        console.log("mushrooms", $scope.mushrooms);
    });
});


