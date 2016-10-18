// --------------------------------------------------------------------------------
// Plugins and Variables
// --------------------------------------------------------------------------------

var gulp   = require('gulp'),
    rename = require('gulp-rename'),
    svgNg  = require('gulp-svg-ngmaterial');

var iconSets = [
    'action',
    'alert',
    'av',
    'communication',
    'content',
    'device',
    'editor',
    'file',
    'hardware',
    'image',
    'maps',
    'navigation',
    'notification',
    'places',
    'social',
    'toggle'
];

// --------------------------------------------------------------------------------
// Material Design Icons Tasks
// --------------------------------------------------------------------------------

iconSets.forEach(function(iconSet) {
    gulp.task(iconSet, function() {
        return gulp.src('bower_components/material-design-icons/' + iconSet + '/svg/production/*18px.svg')
            .pipe(rename(function(path) {
                path.basename = path.basename.replace(/ic_([0-9A-Za-z_]+)_18px/g, '$1');
                path.extname = '.svg';
            }))
            .pipe(svgNg({ filename : iconSet + '-icons.svg' }))
            .pipe(gulp.dest('18px'))

            &&

            gulp.src('bower_components/material-design-icons/' + iconSet + '/svg/production/*24px.svg')
            .pipe(rename(function(path) {
                path.basename = path.basename.replace(/ic_([0-9A-Za-z_]+)_(26x)*24px/g, '$1');
                path.extname = '.svg';
            }))
            .pipe(svgNg({ filename : iconSet + '-icons.svg' }))
            .pipe(gulp.dest('24px'))

            &&

            gulp.src('bower_components/material-design-icons/' + iconSet + '/svg/production/*36px.svg')
            .pipe(rename(function(path) {
                path.basename = path.basename.replace(/ic_([0-9A-Za-z_]+)_36px/g, '$1');
                path.extname = '.svg';
            }))
            .pipe(svgNg({ filename : iconSet + '-icons.svg' }))
            .pipe(gulp.dest('36px'))

            &&

            gulp.src('bower_components/material-design-icons/' + iconSet + '/svg/production/*48px.svg')
            .pipe(rename(function(path) {
                path.basename = path.basename.replace(/ic_([0-9A-Za-z_]+)_48px/g, '$1');
                path.extname = '.svg';
            }))
            .pipe(svgNg({ filename : iconSet + '-icons.svg' }))
            .pipe(gulp.dest('48px'));
    });
});

// --------------------------------------------------------------------
// Default Tasks
// --------------------------------------------------------------------

gulp.task('default', function() {
    iconSets.forEach(function(iconSet) {
        gulp.start(iconSet);
    });
});
