let plane = `plane`;
let sevenFiftySeven = `757`;
let drone = `drone`;
let shellPlane = null;
let nothing = "";

let flyingObjects = [plane, sevenFiftySeven, drone, shellplane, nothing];

function takeOff(a){
    for(i = 0; i < a.length; i++){
         if (a[i]){
        console.log(a[i] + "is preparing for take off.");
         }
         else {
        console.log(a[i] + "cannot fly.");
         }
    }
}

takeOff(flyingObjects);