
var correct = 0;
var incorrect = 0;
var unanswered = 5;
var time = 120;
var countdown;

window.onload = function(){
	$("#trivia").hide();
	$("#submitButton").hide();
	$("#results").hide();
//	$("#replayButton").hide();
};
var start = function(){
	$("#startButton").hide();
	$("#instructions").hide();
	$("#timer").show();
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
var restart = function(){
	$("#trivia").hide();
	$("#submitButton").hide();
	$("#results").hide();
	$('input[name="choices"]').prop("checked", false);
	correct = 0;
	incorrect = 0;
	unanswered = 5;
	time = 120;
	start();
};

$("#startButton").on("click", function(){
	start();
});
$("#submitButton").on("click", function(){
	end();
});
$("#replayButton").on("click", function(){
	restart();
});
$(".incorrectAnswer").on("change", function(){
		incorrect++;
		unanswered--;
});
$(".correctAnswer").on("change", function(){
		correct++;
		unanswered--;
});
