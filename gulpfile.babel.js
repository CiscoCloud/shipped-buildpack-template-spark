import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

import source from 'vinyl-source-stream';

import app from './server/server';
import http from 'http'
import express from 'express';
import path from 'path';
import sourcemaps from 'gulp-sourcemaps';
import nodemon from 'gulp-nodemon';
import babel from 'gulp-babel';
import livereload from 'gulp-livereload';


const clientDir = 'client';
const serverDir = 'server';
const devDir = '.tmp';
const buildDir = 'dist';

// const $ = gulpLoadPlugins({DEBUG:true});

gulp.task('server', ['scripts:server:dev'], () => {

  //configure public dir
  app.use(express.static(__dirname + `/${clientDir}`));

  // HTML5 history api
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, `/${clientDir}`, 'index.html'));
  });

  http.createServer(app).listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
  });
});

// compile server side scripts for dev mode
gulp.task('scripts:server:dev', () => {
  return gulp.src(`${serverDir}/**/*.js`)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`${devDir}/${serverDir}`));
});

gulp.task('serve', ['server'], () => {
  nodemon({
      script: `${devDir}/${serverDir}/server.js`,
      ext: 'json js',
      ignore: [`${clientDir}/*`]
    })
    // .on('change', ['lint'])
    .on('restart', function() {
      console.log('Restarted webserver')
    });

  // Start live reload server
  livereload.listen();


  // Watch our sass files
  // gulp.watch([`${clientDir}/styles/**/*.scss`], [
  //   'styles'
  // ]);

  gulp.watch(`./${clientDir}/**`).on('change', livereload.changed);
  gulp.watch(`${serverDir}/**/*.js`, ['scripts:server:dev']);
});

// JSLint task
// gulp.task('lint', function() {
//   gulp.src(`${clientDir}/scripts/*.js`)
//     .pipe($.jshint())
//     .pipe($.jshint.reporter('default'));
// });
