//input the Data

let result = document.getElementById("result_screen");
let process = document.getElementById("inputtext");

let calculate =(number)=>{
    //variable name.any value we press//
    process.value = process.value + number;
}
//for evaluate values
function final_result() {
    //second screen variable = evaluate (first screen variable)
    result.value =  ("=") + eval(process.value);
}
 function clr() {
    result.value = " ";
    process.value=" ";
}
 function erase() {
       process.value = process.value.slice(0,-1);
}

//change theme
let icon = document.getElementById("icon");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png";
    }
    else {
        icon.src = "images/moon.png";
    }
}

  
