var _ = require('underscore');
var print = console.log;

function quizme(list, count){
    if(!count) count = list.length;
    
    quizzes  = _.shuffle(list).slice(0,count);
    
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    
    var i = 0, mistakes = [];

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


    var quizer = function(chunk) {
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

		if(mistakes.length > 0){
		    print('please fix the mistaken ones...')
		    process.stdin.removeAllListeners('data')
		    module.exports.quizme(mistakes)
		}
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

		if(mistakes.length > 0){
		    print('please fix the mistaken ones...')
		    process.stdin.removeAllListeners('data')
		    module.exports.quizme(mistakes)
		}
		return;
	    }
	    
	    quiz();
	}
	else{
	    relent();
	}
    }

    
    process.stdin.on('data', quizer);

}

module.exports.quizme = quizme
