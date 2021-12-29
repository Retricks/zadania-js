function calc(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let task = document.getElementById("task").value;
    if(num1 == 0 && num2 == 0){
        document.getElementById("result").innerHTML = ``;
    }
    else if(num1 == 0 || num2 == 0){
        document.getElementById("result").innerHTML = `Wpisz obie liczby!`;
    }
    else if(isNaN(num1) || num1 == 0 || isNaN(num2) || num2 == 0){
        document.getElementById("result").innerHTML = `Proszę podać poprawną wartość liczbową!`;
    }
    else{
        num1 = parseInt(document.getElementById("num1").value);
        num2 = parseInt(document.getElementById("num2").value);
        if(task === "+"){
            var result = num1 + num2;
        }
        if(task === "-"){
            var result = num1 - num2;
        }
        if(task === "*"){
            var result = num1 * num2;
        }
        if(task === "/"){
            var result = num1 / num2;
        }
        if(task === "pow"){
            var result = Math.pow(num1, num2);
        }
        document.getElementById("result").innerHTML = `Wynik działania ${num1} ${task} ${num2} = ${result}`;
    }
}