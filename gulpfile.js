var gulp = require('gulp'),
    $    = require('gulp-load-plugins')();

gulp.task('sass', function() {
	gulp.src(['./css/custom.scss'])
	.pipe($.sass({outputStyle: 'compact'}))
	.on('error', $.util.log)
	.pipe(gulp.dest('./css/'));
});

// BEGIN: Git prompt, add, commit, push
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
// END: Git prompt, add, commit, push

gulp.task('watch', function() {
	gulp.watch(['./css/custom.scss'], ['sass']);
});

gulp.task('default', ['sass', 'watch']);