// How to load in modules
const Scene = require('Scene');
const Materials = require('Materials');
const Time = require('Time');
const plano = Scene.root.find('frase');
const Toque = require('TouchGestures');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

var materials = [];
var interval;
var sorting = false;

getMateriais();
Toque.onTap().subscribe(function (gesture) {
    if(sorting) return;
   start();
  });


function start (){
    interval = Time.setInterval(sortResult, 50);
    Time.setTimeout(stop, 2000);
    sorting = true;
}
function getMateriais(){
    for (var i = 0; i<10 ; i++){
        materials.push(Materials.get('img'+i));
    }
}
function sortResult(){
    var random = Math.floor((Math.random() * materials.length)+0);
    plano.material = materials[random];
}
function stop(){
    Time.clearInterval(interval);
    sorting = false;
}


