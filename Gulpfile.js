(function () {
  "use strict";

  const gulp = require('gulp');
  const ts = require('gulp-typescript');
  const tslint = require("gulp-tslint");
  const tsProject = ts.createProject('tsconfig.json');
  const minify = require('gulp-minify');
  const del = require('del');

  function lintTs() {
    return (
      gulp
        .src([
          "./root/src/**/*.ts",
        ])
        .pipe(tslint({
          configuration: "./tslint.json",
          formatter: "verbose"
        }))
        .pipe(tslint.report({
          allowWarnings: true,
          summarizeFailureOutput: false,
          emitError: false
        }))
    );
  }

  function compileTs() {
    return (
      tsProject
        .src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("resources/[dist]"))
    );
  };

  function watch() {
    gulp.watch("resources/root/src/**/*.ts", compileTs);
  };

  // copying .html, .css and .lua files into [dist] folder
  function copyFiles() {
    return (
      gulp
        .src(['./root/src/**/*.lua', './root/src/**/*.html', './root/src/**/*.css'])
        .pipe(gulp.dest('resources/[dist]'))
    )
  };

  // minifyJs wil be added when gulp targets [[dist]] folder with regex mathc pattern right
  function minifyJs() {
    return gulp.src('resources/[dist]/**/*.js', { allowEmpty: true })
      .pipe(minify({ noSource: true }))
      .pipe(gulp.dest('resources/[dist]'))
  }

  // cleanJs wil be added when gulp targets [[dist]] folder with regex mathc pattern right
  function cleanJs() {
    return del([
      "resources/[dist]/**/*.js",
      "!resources/[dist]/**/*-min.js"
    ]);
  }

  gulp.task("watch", watch);
  gulp.task("default", gulp.series(lintTs, compileTs, copyFiles));
}());
