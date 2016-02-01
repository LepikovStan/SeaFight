'use strict'
const gulp = require('gulp')
const server = require('gulp-develop-server')

let options = {
    server: {
        path: './app.js',
        execArgv: [ '--harmony' ]
    }
};
let serverFiles = [ './app.js', './routes/*.js' ]

gulp.task('server:start', function() {
  server.listen(options.server);
});

// restart server if app.js changed
gulp.task('server:restart', function() {
    gulp.watch(serverFiles, server.restart);
});

gulp.task('default', [ 'server:start' ], function() {
    gulp.watch(serverFiles, [ 'server:restart' ])
});
