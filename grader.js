var _ = require('underscore');
var print = console.log;

module.exports.quizme = function(list, count){
    if(!count) count = list.length;
    
    quizzes  = _.shuffle(list).slice(0,count);
    
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    var i = 0,
        mistakes = [];

    var quiz = function(){
	print(quizzes[i].en + ' :');
    }
    
    quiz();

    var congrat = function(){
	print('You made it!');
    }

    var relent = function(){
	print('I am sorry...');
    }
    
    var reachedEnd = function(){
	return i >= count;
    }
    
    var giveHint = function(){
	print(quizzes[i].fi);
    }
    
    var addMistake = function(word){
	mistakes.push(word);
    }

    process.stdin.on('data', function(chunk) {
	if(chunk.trim() == 'hint'){
	    giveHint();
	    addMistake(quizzes[i]);
	}
	else if(chunk.trim() == 'skip'){
	    addMistake(quizzes[i]);
	    i++;
	    
	    if(reachedEnd()) {
		process.stdin.pause();
		print(mistakes);
		return;
	    }

	    quiz();
	}
	else if(quizzes[i].fi === chunk.trim()) {
	    congrat();
	    i++;

	    if(reachedEnd()) {
		process.stdin.pause();
		print(mistakes);
		return;
	    }
	    
	    quiz();
	}
	else{
	    relent();
	}
    });

}
