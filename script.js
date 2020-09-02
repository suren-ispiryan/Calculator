// Global variables
var elements = [];
var num1;
var result;


 // Turn on/off calculator
var OnOff = false;
	$("#onoff").click(function () {
	OnOff = !OnOff;
	if (OnOff) {
		$(this).css({backgroundColor: "green"});
	}
	else{
		$(this).css({backgroundColor: "red"});	
		location.reload();
	}
});


// clicking numbers
$(".btn").click(function () {
	if (OnOff%2==1) {	 
		$(".screen").append($(this).text());
	}
});


// clicking actions
$(".actions").click(function () {
	if (OnOff%2==1) {
		$(".actionsPush").empty();
		$(".actionsPush").append($(this).text());
		$(".prevScreen").empty();
		$(".prevScreen").append($(".screen").text());
		$(".screen").empty();
	}
});


//' clicking sqrt
$("#sqr").click(function () {
	if (OnOff%2==1) {
		$(".actionsPush").empty();
		$(".actionsPush").append($(this).text());
		$(".prevScreen").append($(this).text());
	}
});


//' clicking sqrt
$("#sqrt").click(function () {
	if (OnOff%2==1) {
		$(".actionsPush").empty();
		$(".actionsPush").append($(this).text());
		$(".prevScreen").append($(this).text());
	}
});


// clicking c
$("#c").click(function () {
	if (OnOff) {
		$(".actionsPush").empty();
		$(".prevScreen").empty();
		$(".screen").empty();	
	}
});


// clicking equal do (+, -, *, /, sqr, sqrt)
$(".equal").click(function () {
	if (OnOff) {
		if ($(".actionsPush").text() == "+") {
			result = parseInt($(".prevScreen").text()) + parseInt($(".screen").text());
			$(".prevScreen").empty();
		 	$(".prevScreen").append(result);
		}
		else if ($(".actionsPush").text() == "-") {
			result = parseInt($(".prevScreen").text()) - parseInt($(".screen").text());
			$(".prevScreen").empty();
			$(".prevScreen").append(result);
		}
		else if ($(".actionsPush").text() == "x") {
			result = parseInt($(".prevScreen").text()) * parseInt($(".screen").text());
			$(".prevScreen").empty();
			$(".prevScreen").append(result);
		}
		else if ($(".actionsPush").text() == "/") {
			result = parseInt($(".prevScreen").text()) / parseInt($(".screen").text());
			$(".prevScreen").empty();
			$(".prevScreen").append(result); 
		}
		else if ($(".prevScreen").text() == "SQR"){
			result = parseInt($(".screen").text()) * parseInt($(".screen").text());
			$(".prevScreen").empty();
			$(".prevScreen").append(result); 
		}
		else if ($(".prevScreen").text() == "SQRT"){
			result = Math.sqrt($(".screen").text());
			$(".prevScreen").empty();
			$(".prevScreen").append(result); 
		}
		else{
			result = "ERROR";
			$(".prevScreen").empty();
			$(".prevScreen").append(result); 
		}
		$(".screen").empty();
	}
});


// clicking . (dot)
$("#dot").click(function () {
	if (OnOff) {
		let res = parseInt($(".screen").text());
		let reg = /\D/g;
		let matching = res.match(reg);
		let dotSymbhol = /\./; 
		if (matching != dotSymbhol) {
			$(".screen").append($(this).text());
		}
	}
});







