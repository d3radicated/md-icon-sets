// --------------------------------------------------------------------------------
// Plugins
// --------------------------------------------------------------------------------

var gulp        = require('gulp'),
    replaceName = require('gulp-replace-name'),
    svgNg       = require('gulp-svg-ngmaterial');

// --------------------------------------------------------------------------------
// Material Design Icons (https://github.com/google/material-design-icons) Tasks
// --------------------------------------------------------------------------------

gulp.task('action', function() {
    return gulp.src('bower_components/material-design-icons/action/svg/production/*24px.svg')
        .pipe(replaceName(/ic_([0-9A-Za-z_]+)_24px/g, '$1'))
        .pipe(svgNg({ filename : 'action.svg' }))
        .pipe(gulp.dest('24px'))

        &&

        gulp.src('bower_components/material-design-icons/action/svg/production/*48px.svg')
        .pipe(replaceName(/ic_([0-9A-Za-z_]+)_48px/g, '$1'))
        .pipe(svgNg({ filename : 'action.svg' }))
        .pipe(gulp.dest('48px'));
});

// --------------------------------------------------------------------
// Default Tasks
// --------------------------------------------------------------------

gulp.task('default', function() {
    
});
