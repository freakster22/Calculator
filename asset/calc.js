var num1 = document.getElementById("1");
var num2 = document.getElementById("2");
var num3 = document.getElementById("3");
var num4 = document.getElementById("4");
var num5 = document.getElementById("5");
var num6 = document.getElementById("6");
var num7 = document.getElementById("7");
var num8 = document.getElementById("8");
var num9 = document.getElementById("9");
var num0 = document.getElementById("0");
var sign = document.getElementById("sign");
var backspace = document.getElementById("backspace");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var mul = document.getElementById("mul");
var div = document.getElementById("div");
var percent = document.getElementById("percent");
var equal = document.getElementById("equal");
var decimal = document.getElementById("decimal");
var power = document.getElementById("power");
var allclr = document.getElementById("AC");
var input = document.getElementById("display");

var mode = document.getElementById("mode");

num0.addEventListener("click", function () {
    console.log("0 pressed");
    input.value += "0";
});

num1.addEventListener("click", function () {

    input.value += "1";
});

num2.addEventListener("click", function () {

    input.value += "2";
});

num3.addEventListener("click", function () {

    input.value += "3";
});


num4.addEventListener("click", function () {

    input.value += "4";
});


num5.addEventListener("click", function () {

    input.value += "5";
});


num6.addEventListener("click", function () {

    input.value += "6";
});


num7.addEventListener("click", function () {

    input.value += "7";
});


num8.addEventListener("click", function () {

    input.value += "8";
});

num9.addEventListener("click", function () {

    input.value += "9";
});

add.addEventListener("click", function () {
    input.value += "+";
});


minus.addEventListener("click", function () {

    input.value += "-";
});

mul.addEventListener("click", function () {
    input.value += "*";
});

div.addEventListener("click", function () {
    input.value += "/";
});

percent.addEventListener("click", function () {
    input.value += "%";
})

decimal.addEventListener("click", function () {
    input.value += ".";
})

power.addEventListener("click", function () {
    input.value += "^";
})

sign.addEventListener("click", function () {
    input.value = -(input.value);
})

backspace.addEventListener("click", function () {
    expression = input.value;
    console.log(expression);
    if (expression != 0) {
        len = expression.length;
        input.value = expression.substr(0, len - 1);
    }
    else input.value = "";
})

equal.addEventListener("click", function () {
    var expression = input.value;
    if (expression.includes("^")) {
        var x = expression.substr(0, expression.indexOf('^'));
        var y = expression.substr(expression.indexOf('^') + 1, expression.length);
        input.value = Math.pow(x, y);

    }
    else
        try {
            expression = eval(expression);
            console.log(expression);
            if (expression != expression) {
                console.log("true");
                input.value = "| ERROR!! |";
            }
            else {
                console.log("false");
                console.log(expression);
                input.value = expression;
            }
        } catch (e) {
            input.value = "| ERROR!! |";
            alert("Error occured!");
        }
});

allclr.addEventListener("click", function () {
    input.value = "";
})

mode.addEventListener("click", function () {
    if (document.documentElement.getAttribute("color-mode") == "dark"){
        document.documentElement.setAttribute("color-mode", "light");
        mode.innerText = "🕶️";
        mode.style.fontSize= "1.6rem";
        
    }
    else{
        document.documentElement.setAttribute("color-mode", "dark");
        mode.innerText = "☀️";
        mode.style.fontSize= "1.6rem";
    }
})