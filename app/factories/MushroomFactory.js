"use strict";

app.factory("MushroomFactory", function($q, $http){

    let getShroom= () =>{
        let item= [];
        return $q((resolve,reject)=>{
            $http.get("https://mushrooms-5e164.firebaseio.com/mushrooms.json")
            .then((itemObject)=>{
                let itemCollection= itemObject.data;
                console.log("mushroom collection",itemCollection);
                resolve(itemCollection);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };
    return {getShroom};
});
