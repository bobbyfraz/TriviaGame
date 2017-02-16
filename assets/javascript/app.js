
//create game function
//create clickable log function
//create if then statements to log correct answers and score

var q1Answer;
var q2Answer;
var q3Answer;
var q4Answer;
var q5Answer;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 5;
//var userScore = 0;
var countdown;

window.onload = function(){
	$("#results").hide();
	$("#trivia").hide();
}

//var game = function(){
	$("#startButton").on("click", function(){
		function start(){
//			$("#startButton").prop("disabled",true);
			$("#startButton").hide();
			$("#trivia").show();
			$("#batman").html("1. Batman!");
				$("#q1").html("What is Batman's alter ego?");
					$("#q1a1").html(" A. Bruce Banner");
					$("#q1a2").html(" B. Tony Stark");
					$("#q1a3").html(" C. Bruce Wayne");
					$("#q1a4").html(" D. Steve Rogers");
			$("#captainamerica").html("2. Captain America!");
				$("#q2").html("What year did Captain America receive his abilities?");
					$("#q2a1").html(" A. 1939");
					$("#q2a2").html(" B. 1941");
					$("#q2a3").html(" C. 1943");
					$("#q2a4").html(" D. 1945");
			$("#ironman").html("3. Iron Man!");
				$("#q3").html("Where did Iron Man go to college?");
					$("#q3a1").html(" A. Harvard University");
					$("#q3a2").html(" B. Stanford University");
					$("#q3a3").html(" C. Princeton University");
					$("#q3a4").html(" D. M.I.T.");
			$("#wolverine").html("4. Wolverine!");
				$("#q4").html("What type of metal is Wolverine's skeleton and claws made out of?");
					$("#q4a1").html(" A. Adamantium");
					$("#q4a2").html(" B. Aluminum");
					$("#q4a3").html(" C. Iron");
					$("#q4a4").html(" D. Steel");
			$("#spyderman").html("5. Spyderman!");
				$("#q5").html("What city is Spyderman from?");
					$("#q5a1").html(" A. Brooklyn");
					$("#q5a2").html(" B. Bronx");
					$("#q5a3").html(" C. Queens");
					$("#q5a4").html(" D. Manhattan");
			stopwatch();
			countdown = setInterval(stopwatch,1000);
		};
		start();
	});
	var stopwatch = function(){
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
			$("#results").show();
			$("#done").html("All Done!");
			$("#correct").html("Correct Answers: " + correct);
			$("#incorrect").html("Incorrect Answers: " + incorrect);
			$("#unanswered").html("Unanswered: " + unanswered);
		}
	}
//};
//game();