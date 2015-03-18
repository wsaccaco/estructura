
var gulp = require( 'gulp' ),
    less = require( 'gulp-less' ),
    browserify = require( 'gulp-browserify' );

var path = {
    main : './main.js',
    project : './project.js'
};

gulp.task( 'js', function () {

    gulp.src( path.main )
            .pipe( browserify() )
            .pipe( gulp.dest( '../js' ) );


} );


gulp.task( 'less', function () {
    gulp.src( './main.less' )
        .pipe( less() )
        .pipe( gulp.dest( '../css' ) );

} );



gulp.task( 'watch', function () {
    gulp.watch( './models/*', [ 'js' ] );
    gulp.watch( './less/**/*.less', [ 'less' ] );
} );

gulp.task( 'default', [ 'less', 'js', 'watch' ] );

