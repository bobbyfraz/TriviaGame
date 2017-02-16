
var correct = 0;
var incorrect = 0;
var unanswered = 5;
var time = 120;
var countdown;

window.onload = function(){
	$("#results").hide();
	$("#trivia").hide();
	$("#submitButton").hide();
}
var start = function(){
//	$("#startButton").prop("disabled",true);
	$("#startButton").hide();
	$("#trivia").show();
	$("#submitButton").show();
	triviaTime();
	countdown = setInterval(triviaTime,1000);
};
var triviaTime = function(){
		time--;
		$("#timer").html(time + " Seconds");
		stop();
};
var stop = function(){
	if(time===0){
		clearInterval(countdown);
		alert("Time is up!");
		$("#timer").hide();
		$("#trivia").hide();
		$("#submitButton").hide();
		$("#results").show();
		$("#correct").html("Correct Answers: " + correct);
		$("#incorrect").html("Incorrect Answers: " + incorrect);
		$("#unanswered").html("Unanswered: " + unanswered);
	};
};
var end = function(){
	clearInterval(countdown);
	$("#timer").hide();
	$("#trivia").hide();
	$("#submitButton").hide();
	$("#results").show();
	$("#correct").html("Correct Answers: " + correct);
	$("#incorrect").html("Incorrect Answers: " + incorrect);
	$("#unanswered").html("Unanswered: " + unanswered);
};

$("#startButton").on("click", function(){
	start();
});
$("#submitButton").on("click", function(){
	end();
});
$(".incorrectAnswer").on("click", function(){
	incorrect++;
	unanswered--;
});
$(".correctAnswer").on("click", function(){
	correct++;
	unanswered--;
});
