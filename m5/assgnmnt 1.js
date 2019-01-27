var quiz = {
	"questions" : [ 
		{"question" : "What is the tallest waterfall in the world?",
		"option" : [
			{ 	text: "Angel",
				isCorrect: true,
				feedback: "Congrats..your answer is correct..!"},
			{ 	text: "Niagara",
				isCorrect: false,
				feedback: "Oops..your answer is Incorrect..!"}
		],
		"hint" : "It is located in venezuela.",
		},
		{"question" : "What is the national game of India?",
		"option" : [
			{ 	text: "Cricket",
				isCorrect: false,
				feedback: "Oops..your answer is Incorrect..!"},
			{ 	text: "Hockey",
				isCorrect: true,
				feedback: "Congrats..your answer is correct..!"}
		],
		"hint" : "It is present in one of sharuk khan films.",
		},
		{"question" : "What is the First metal used in India?",
		"option" : [
			{ 	text: "Iron",
				isCorrect: false,
				feedback: "Oops..your answer is Incorrect..!"},
			{ 	text: "Copper",
				isCorrect: true,
				feedback: "Congrats..your answer is correct..!"}
		],
		"hint" : "It is mostly used in electrical equipment.",
		},
	] 
}

function clicks(i,j) {
	if (quiz.questions[i].option[j].isCorrect) {
		x=''
		x += '<div class="alert alert-success alert-dismissible">'
		x += '<a href="#" class="close" x-dismiss="alert" aria-label="close">&times;</a>'
		x += '<span class="glyphicon glyphicon-ok"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback').innerHTML = x
	} else {
		x=''
		x += '<div class="alert alert-warning alert-dismissible">'
		x += '<a href="#" class="close" x-dismiss="alert" aria-label="close">&times;</a>'
		x += '<span class="glyphicon glyphicon-remove"></span>'
	            +'<strong>'+quiz.questions[i].option[j].feedback+'</strong>'
	    document.getElementById('feedback').innerHTML = x
	}
}

var i = 0
var j = 0

window.onload = function display() {
	document.getElementById('question').innerHTML = quiz.questions[i].question
	document.getElementById('hint').innerHTML = quiz.questions[i].hint
	document.getElementById('radio').innerHTML = '<input type = "radio" name = "q1" value = "option 1" onclick = "clicks('+i+','+j+')">' + quiz.questions[i].option[j].text + '<br>'
	+ '<input type = "radio" name = "q1" value = "option 2" onclick = "clicks('+i+','+j+1+')">' + quiz.questions[i].option[j+1].text + '<br>'
	hideButton('previous')
};
function hideButton(id) {
	document.getElementById(id).style.visibility = 'hidden';
}
function showButton(id) {
	document.getElementById(id).style.visibility = 'visible';
}

function prev() {
	i--;
	if(i < 0){
		i = 0;
		hideButton('previous')
		return;
	}
	showButton('previous')
	showButton('Next')
	document.getElementById('question').innerHTML = quiz.questions[i].question
	document.getElementById('hint').innerHTML = quiz.questions[i].hint
	document.getElementById('radio').innerHTML = '<input type = "radio" name = "q1" value = "option 1" onclick = "clicks('+i+','+j+')">' + quiz.questions[i].option[j].text + '<br>'
	+ '<input type = "radio" name = "q1" value = "option 2" onclick = "clicks('+i+','+j+1+')">' + quiz.questions[i].option[j+1].text + '<br>'
	if(i == 0) {
		hideButton('previous')
	}
}

function nxt() {
	i++;
	if (i > quiz.questions.length - 1) {
		i = questions.length - 1
		hideButton('Next')
	}
	showButton('Next')
	showButton('previous')
	document.getElementById('question').innerHTML = quiz.questions[i].question
	document.getElementById('hint').innerHTML = quiz.questions[i].hint
	document.getElementById('radio').innerHTML = '<input type = "radio" name = "q1" value = "option 1" onclick = "clicks('+i+','+j+')">' + quiz.questions[i].option[j].text + '<br>'
	+ '<input type = "radio" name = "q1" value = "option 2" onclick = "clicks('+i+','+j+1+')">' + quiz.questions[i].option[j+1].text + '<br>'
	if(i == quiz.questions.length - 1) {
		hideButton('Next')
	}
}
function load() {
	location.reload();
}

