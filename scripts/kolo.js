var check = false;

function p(){
    check = "p";
    let circle = document.getElementById("circle").value;
    let result = Math.round(Math.PI*circle/2*circle/2*100)/100;
    document.getElementById("result").innerHTML = `Pole koła: ~${result}`;
    if(isNaN(circle) || circle == 0){
        document.getElementById("result").innerHTML = `Należy podać liczbę!`;
    }
}
function o(){
    check = "o";
    let circle = document.getElementById("circle").value;
    let result = Math.round(2*Math.PI*circle/2*100)/100;
    document.getElementById("result").innerHTML = `Obwód koła: ~${result}`;
    if(isNaN(circle) || circle == 0){
        document.getElementById("result").innerHTML = `Należy podać liczbę!`;
    }
}
function calc(){
    let circle = document.getElementById("circle").value;
    if(check == false){
        document.getElementById("result").innerHTML = `Kliknij w przycisk "Licz pole" lub "Licz obwód"`;
    }
    if(check == "p"){
        let result = Math.round(Math.PI*circle/2*circle/2*100)/100;
        document.getElementById("result").innerHTML = `Pole koła: ~${result}`;
    }
    if(check == "o"){
        let result = Math.round(2*Math.PI*circle/2*100)/100;
        document.getElementById("result").innerHTML = `Obwód koła: ~${result}`;
    }
    if(isNaN(circle) || circle == 0){
        document.getElementById("result").innerHTML = `Należy podać liczbę!`;
    }
}