//create timer function
//create start function
//create game function
//create clickable log function
//create if then statements to log correct answers and score
//create allert with score

/*
var intervalId;
var running = false;

var time = {
	timeLeft: 0200,
	//timeStart: function(){
		timer: function(){
			if(running == false){
				intervalId = setInterval(time.count, 1000);
				running = true;
			}
		},
		count: function(){
			time.timeLeft--;
			var converted = time.timeConverter(time.timeLeft);
			$("#timer").html(converted);
			console.log(converted);
		},
		timeConverter: function(t) {
			var minutes = Math.floor(t / 60);
			var seconds = t - (minutes * 60);
			if (seconds < 10) {
				seconds = "0" + seconds;
			}
			if (minutes === 0) {
				minutes = "00";
			}
			else if (minutes < 10) {
				minutes = "0" + minutes;
			}
			return minutes + ":" + seconds;
			}
	//}
};
*/

/*
var time = 0200;
	function startTimer() {
	intervalId = setInterval(count, 1000);
	}
	function count() {
		time--;
		var converted = timeConverter(time);
		$("#timer").html(converted);
	}
	function timeConverter(t) {
		var minutes = Math.floor(t / 60);
		var seconds = t - (minutes * 60);
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		if (minutes === 0) {
			minutes = "00";
		}
		else if (minutes < 10) {
			minutes = "0" + minutes;
		}
		return minutes + ":" + seconds;
		}
*/

function game(){
	$("#startButton").on("click", function(event){
		var userScore = 0;
		function start(){
			$("#batman").html("1. Batman!");
				$("#q1").html("What is Batman's alter ego?");
					$("#q1a1").html(" A. Bruce Banner");
					$("#q1a2").html(" B. Tony Stark");
					$("#q1a3").html(" C. Bruce Wayne");
					$("#q1a4").html(" D. Steve Rogers");
			$("#captainamerica").html("2. Captain America!");
				$("#q2").html("What year did Captain Americareceive his abilities?");
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
		};
		start();
	});
	var time = 5;
	var running = false;
	$("#startButton").on("click", function(event){
			function startTimer() {
				if(running == false){
					intervalId = setInterval(count, 1000);
					running = true;
				};
//				if(time <= 0){
//					stopTimer();
//				}
			};
			startTimer();
			function stopTimer() {
				if(running = true){
					if(time == 0){
					clearInterval(intervalId);
					running = false;
					};
				};
			stopTimer();
			};
			function count() {
				time--;
				var converted = timeConverter(time);
				$("#timer").html(converted);
			};
			function timeConverter(t) {
				var minutes = Math.floor(t / 60);
				var seconds = t - (minutes * 60);
				if (seconds < 10) {
					seconds = "0" + seconds;
				}
				if (minutes === 0) {
					minutes = "00";
				}
				else if (minutes < 10) {
					minutes = "0" + minutes;
				}
				return minutes + ":" + seconds;
				}
	});
};
game();