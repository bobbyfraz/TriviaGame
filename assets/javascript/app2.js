
<input type="radio"



var tallycorrect = 0;
var tallyincorrect = 0;
var unanswered = 5;
var time = 120;
var countdown;
var triviaquestions = [
{
    question:"What is Batman's alter ego?",
    choices:["A) Bruce Banner","B) Tony Stark","C) Bruce Wayne","D) Steve Rogers"],
    correctAnswer:3
},
{
    question:"What year did Captain America receive his abilities?",
    choices:["A) 1939","B) 1941","C) 1943","D) 1945"],
    correctAnswer:2
},
{
    question:"Where did Iron Man go to college?",
    choices:["A) Harvard University", "B) Stanford University", "C) Princeton University", "D) M.I.T."],
    correctAnswer:4
},
{
    question:"What type of metal is Wolverine's skeleton and claws made out of?",
    choices:["A) Adamantium","B) Aluminum","C) Iron","D) Steel"],
    correctAnswer:1
},
{
    question:"What city is Spyderman from?",
    choices:["A) Brooklyn", "B) Bronx","C) Queens","D) Manhattan"],
    correctAnswer:3
}];

window.onload = function(){
	$("#trivia-form").hide();
	$("#submitButton").hide();
	$("#results").hide();
//	$("#replayButton").hide();
}
var start = function(){
	
	$("#startButton").hide();
	$("#instructions").hide();
	$("#timer").show();
	$("#trivia-form").show();
	$("#submitButton").show();
	triviaTime();
	game();
	countdown = setInterval(triviaTime,1000);
};

var game = function(){
	for (var i=0; i<triviaquestions.length; i++){
       $("#trivia-form").append("<label>"+triviaquestions[i].question+"</label><br>");
       for (var j=0; j<triviaquestions[i].choices.length; j++){
           console.log(i+","+j+","+triviaquestions[i]);
           if (j===triviaquestions[i].correctanswer){
           $("#trivia-form").append('<input type="radio" name="question'+i+'" value="correct">'+triviaquestions[i].choices[j]+'<br>');
           }
           else{    
           $("#trivia-form").append('<input type="radio" name="question'+i+'" value="incorrect">'+triviaquestions[i].choices[j]+'<br>');
           }    
           $("trivia-form").show(trivia.question);
       }
       console.log(triviaquestions[i].question);
   };

var submitAnswers = function(){
   var radioValue = $("input[name='question0']:checked").val();
   console.log(radioValue);
   for (var i=0; i<triviaquestions.length; i++){
       if ( $("input[name='question"+i+"']:checked").val()==="correct")
       {
           console.log(true)
           tallycorrect++;
       }
       else
       {
           tallyincorrect++;
       }
   }
   $("#correct").html(tallycorrect);
   $("#incorrect").html(tallyincorrect);
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
		$("#correct").html("Correct Answers: " + tallycorrect);
		$("#incorrect").html("Incorrect Answers: " + tallyincorrect);
		$("#unanswered").html("Unanswered: " + unanswered);
	};
};
var end = function(){
	clearInterval(countdown);
	$("#timer").hide();
	$("#trivia").hide();
	$("#submitButton").hide();
	$("#results").show(); 
	$("#correct").html("Correct Answers: " + tallycorrect);
	$("#incorrect").html("Incorrect Answers: " + tallyincorrect);
	$("#unanswered").html("Unanswered: " + unanswered);
};

$("#startButton").on("click", function(){
	start();
});
$("#submitButton").on("click", function(){
	end();
});
$("#replayButton").on("click", function(){
	$("#trivia").hide();
	$("#submitButton").hide();
	$("#results").hide();

	tallycorrect = 0;
	tallyincorrect = 0;
	unanswered = 5;
	time = 120;
	start();
});
/*$(".incorrectAnswer").on("click", function(){
	incorrect++;
	unanswered--;
});
$(".correctAnswer").on("click", function(){
	correct++;
	unanswered--;
});*/
