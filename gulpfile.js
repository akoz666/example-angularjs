/**
 * Created by Dali on 12/11/2014.
 */

"use strict";
var gulp = require("gulp");
var uglify = require("gulp-uglify");
var minifyCss = require("gulp-minify-css");
var rimraf = require("rimraf");
var watch = require("gulp-watch");
var useref = require("gulp-useref");
var livereload = require("gulp-livereload");
var gulpif = require("gulp-if");
var imagemin = require("gulp-imagemin");
var pngcrush = require("imagemin-pngcrush");

var webserver = require("gulp-webserver");

var plumber = require("gulp-plumber");

////.pipe(plumber())


var zip = require("gulp-zip");


gulp.task("webserver", function() {

    gulp.src("app")
        .pipe(webserver({
            host: "0.0.0.0",
            port: 9090,
            livereload: false,
            directoryListing: true
        }));

});


gulp.task("clean", function (cb) {
    rimraf("./dist", cb);
});


gulp.task("watch", function () {
    var server = livereload();
    gulp.watch("server.js", ["useref", "imagemin"]);
    gulp.watch("app**/*.js", ["useref", "imagemin"]);
    gulp.watch("app/**/*.css", ["useref", "imagemin"]);
    gulp.watch("app/**/*.html", ["useref", "imagemin"]);
    gulp.watch(["app/**/*.js", "app/**/*.css", "app/**/*.html", "server.js"]).on("change", function (event) {
        console.log("@-->caught change in file", event);
        server.changed(event.path)
    });
});

gulp.task("useref", ["clean"], function () {
    var assets = useref.assets();
    return gulp.src(["app/**/*.html", "server.js"])
        .pipe(plumber())
        .pipe(assets)
        .pipe(gulpif("**/*.js", uglify()))
        .pipe(gulpif("**/*.css", minifyCss()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest("dist"));

});

gulp.task("imagemin", function() {
    return gulp.src("app/img/**/*")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest("dist/img"));
});

gulp.task("dist", ["clean", "useref", "imagemin", "webserver", "watch"], function () {});

gulp.task("default", ["dist"], function () {
    return gulp.src("dist/**/*")
        .pipe(zip("dist.zip"))
        .pipe(gulp.dest("dist"));
});
