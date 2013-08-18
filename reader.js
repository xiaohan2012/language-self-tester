var fs = require('fs');
var print = console.log;
module.exports.read = function(fileName, callback){
    fs.readFile(fileName, function(err, data){
	if(err) throw err
	data = data.toString('utf8');
	var pairs = data.split('\n')
	    .filter(function(l){
		return l.length > 0}
		  )
	    .map(function(line){
		var pair = line.split(',');
		
		return {'en': pair[0],'fi':pair[1]}
	    });

	callback(pairs);
    })
}
