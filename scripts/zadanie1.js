function calc(){
    let lq = document.getElementById("lq").value;
    let result = Math.ceil(lq / 2500);
    document.getElementById("result").innerHTML = `Ilość potrzebnych zbiorników: ${result}`;
}