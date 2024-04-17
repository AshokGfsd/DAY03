

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

var properties="A given two JSON properties are same";
debugger;
if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
                    }
        else {
            properties="A given two JSON properties are  not same";
            
        }
    }
}
else {
    properties="A given two JSON properties are  not same";
}
console.log(properties);
