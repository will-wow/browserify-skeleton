
// Path to public folder
var tmpPath = 'dev/public/';

// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `source/styles/importer.less` instead.)
var cssFilesToInject = [
  'css/**/*.css'
];

// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  'js/main.js'
  //'ja/main.min.js'

  // Use the "exclude" operator to ignore files
  // '!js/ignore/these/files/*.js'
];

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(transformPath);
module.exports.jsFilesToInject = jsFilesToInject.map(transformPath);

// Transform paths relative to the "source" folder to be relative to the public
// folder, preserving "exclude" operators.
function transformPath(path) {
  return (path.substring(0,1) == '!') ? ('!' + tmpPath + path.substring(1)) : (tmpPath + path);
}
