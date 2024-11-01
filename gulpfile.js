const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Compiling SCSS to CSS
function buildStyles() {
  return src("shinobi/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("css"));
}

//watch sass files for changes
function watchFiles() {
  watch(["shinobi/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchFiles);
