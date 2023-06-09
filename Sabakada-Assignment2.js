function addNumbers() {
    var num1 = parseInt(document.getElementById("firstNumber").value);
    var num2 = parseInt(document.getElementById("secondNumber").value);
    var result = num1 + num2;
    document.getElementById("result").innerHTML = result;
}

function subNumbers() {
    var num1 = parseInt(document.getElementById("firstNumber").value);
    var num2 = parseInt(document.getElementById("secondNumber").value);
    var result = num1 - num2;
    document.getElementById("result").innerHTML = result;
}

function multiplyBy() {
    var num1 = parseInt(document.getElementById("firstNumber").value);
    var num2 = parseInt(document.getElementById("secondNumber").value);
    var result = num1 * num2;
    document.getElementById("result").innerHTML = result;
}

function divideBy() {
    var num1 = parseInt(document.getElementById("firstNumber").value);
    var num2 = parseInt(document.getElementById("secondNumber").value);
    var result = num1 / num2;
    document.getElementById("result").innerHTML = result;
}

function modulusOf() {
    var num1 = parseInt(document.getElementById("firstNumber").value);
    var num2 = parseInt(document.getElementById("secondNumber").value);
    var result = num1 % num2;
    document.getElementById("result").innerHTML = result;
}
