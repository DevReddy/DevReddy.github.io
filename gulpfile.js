var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var commitMessage = '';

gulp.task('prompt', function(){

	return gulp.src('./*')
	.pipe($.prompt.prompt({
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
	.pipe($.git.add());
});

gulp.task('commit', ['addAll'], function(){
	return gulp.src('./*')
	.pipe($.git.commit(commitMessage, {maxBuffer: 'Infinity'}));
});

gulp.task('pushMaster', ['commit'], function(){
	$.git.push('origin', 'master', function(err){
		if (err) throw err;
	});
});

gulp.task('default', ['pushMaster']);