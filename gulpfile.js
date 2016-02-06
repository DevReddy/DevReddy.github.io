var gulp = require('gulp');
var git = require('gulp-git');
var prompt = require('gulp-prompt');

var commitMessage = '';

gulp.task('prompt', function(){

	return gulp.src('./*')
	.pipe(prompt.prompt({
		type: 'input',
		name: 'message',
		message: 'Write a commit message:'
		},
		function(res){
			commitMessage = res.message;
		}
	));
});

gulp.task('addAll', ['prompt'], function(){
	return gulp.src('./*')
	.pipe(git.add());
});

gulp.task('commit', ['addAll'], function(){
	return gulp.src('./*', {buffer: false})
	.pipe(git.commit(commitMessage, {emitData: true, maxBuffer: 'Infinity'}));
});

gulp.task('pushMaster', ['commit'], function(){
	git.push('origin', 'master', function(err){
		if (err) throw err;
	});
});

gulp.task('default', ['pushMaster']);