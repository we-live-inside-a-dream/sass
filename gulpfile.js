const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Compiling SCSS to CSS
function buildStyles() {
  return src("*.scss").pipe(sass()).pipe(dest("css"));
}

//watch sass files for changes
function watchFiles() {
  watch(["*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchFiles);
