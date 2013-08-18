var reader = require('./reader');
var grader = require('./grader');
var category = process.argv[2];

reader.read('tables/' + category + '.txt', grader.quizme)
