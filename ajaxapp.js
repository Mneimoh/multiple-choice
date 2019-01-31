//The global variable qn is the current question number
var qn = 0;
//load the questions from the XML file
function getQuestions(){
	obj = document.getElementById("question");
	obj.firstChild.nodeValue = "(Please Wait)";
	loadDoc("questions.xml",nextQuestion);
}
//dispaly the next question
function nextQuestion(){
	question = ajaxreq.responseXML.getElementsByTagName("q");
	obj = document.getElementById("question");
	if(qn < question.length){
		presentquestion = question[qn].firstChild.nodeValue;
		obj.firstChild.nodeValue = presentquestion;
	}
	else{
		obj.firstChild.nodeValue = "(no more quetions)";
	}
}
//check the user's answer
function checkAnswer(){
	answer = ajaxreq.responseXML.getElementsByTagName("a");
	a = answer[qn].firstChild.nodeValue;
	objs = document.getElementById("answer");
	if (a == objs.value) {
		window.alert("Correct!");
	} else{
		window.alert("Incorrect: The correct answer is" + a);
	}
	qn = qn + 1;
	objs.value = "";
	nextQuestion();
}
//set the event handlers of the program
objstartquiz = document.getElementById("startq");
objstartquiz.onclick = getQuestions;
objsubmitanswer = document.getElementById("submit");
objsubmitanswer.onclick = checkAnswer;

