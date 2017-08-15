$(document).ready(function () {
	var testNumLength = function (number) {
        if (number.length > 9) {
            resultdiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                resultdiv.text("Err");
            }
        } 
    }; //powyżej zeruje licznik po wciśnięciu znaku równości
	var number = "";
    var newnumber = "";
    var operator = "";
    var resultdiv = $("#result");
    resultdiv.text("0");
    $("#numbers a").not("#clear,#clearall").click(function (){
		number += $(this).text();
		resultdiv.text(number);
		testNumLength(number);
        console.log(number)
    });
    $("#operators a").not("#equals").click(function (){
		operator = $(this).text();
		newnumber = number;
		number = "";
        console.log(newnumber)
        console.log(operator)
    });
    $("#clear,#clearall").click(function (){
		number = "";
		resultdiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
    });
    console.log(number);
    console.log(newnumber)
    $("#equals").click(function (){
		if (operator === "+"){
			number = (parseInt(number, 10) + parseInt(newnumber, 10)).toString(10);
		} else if (operator === "-") {
			number = (parseInt(newnumber, 10) - parseInt(number, 10)).toString(10);
		} else if (operator === "/") {
			number = (parseInt(newnumber, 10) / parseInt(number, 10)).toString(10);
		} else if (operator === "*") {
			number = (parseInt(newnumber, 10) * parseInt(number, 10)).toString(10);
		}
		resultdiv.text(number);
		testNumLength(number);
		number = "";
		newnumber = "";
    });
});