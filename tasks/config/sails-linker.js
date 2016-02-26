/**
 * Autoinsert script tags (or other filebased tags) in an html file.
 *
 * ---------------------------------------------------------------
 *
 * Automatically inject <script> tags for javascript files and <link> tags
 * for css files.  Also automatically links an output file containing precompiled
 * templates using a <script> tag.
 *
 * For usage docs see:
 * 		https://github.com/Zolmeister/grunt-sails-linker
 *
 */
module.exports = function(grunt) {

	grunt.config.set('sails-linker', {
		devJs: {
			options: {
				startTag: '<!--SCRIPTS-->',
				endTag: '<!--SCRIPTS END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: 'dev/public'
			},
			files: {
				'dev/public/**/*.html': require('../pipeline').jsFilesToInject
			}
		},

		prodJsRelative: {
			options: {
				startTag: '<!--SCRIPTS-->',
				endTag: '<!--SCRIPTS END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: 'dev/public',
				relative: true
			},
			files: {
				'dev/public/**/*.html': ['dev/public/js/main.min.js']
			}
		},

		devStyles: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: 'dev/public'
			},

			files: {
				'dev/public/**/*.html': require('../pipeline').cssFilesToInject
			}
		},
		prodStylesRelative: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: 'dev/public',
				relative: true
			},
			files: {
				'dev/public/index.html': ['dev/public/css/styles.min.css']
			}
		}


		/*devJsRelative: {
			options: {
				startTag: '<!--SCRIPTS-->',
				endTag: '<!--SCRIPTS END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: 'dev/public',
				relative: true
			},
			files: {
				'dev/public/!**!/!*.html': require('../pipeline').jsFilesToInject,
				'dev/views/!**!/!*.ejs': require('../pipeline').jsFilesToInject
			}
		},*/

		/*prodJs: {
			options: {
				startTag: '<!--SCRIPTS-->',
				endTag: '<!--SCRIPTS END-->',
				fileTmpl: '<script src="%s"></script>',
				appRoot: 'dev/public'
			},
			files: {
				'.tmp/public/!**!/!*.html': ['dev/public/js/main.min.js']
			}
		},*/



		/*devStylesRelative: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: 'dev/public',
				relative: true
			},

			files: {
				'dev/public/!**!/!*.html': require('../pipeline').cssFilesToInject,
				'dev/views/!**!/!*.ejs': require('../pipeline').cssFilesToInject
			}
		},*/

		/*prodStyles: {
			options: {
				startTag: '<!--STYLES-->',
				endTag: '<!--STYLES END-->',
				fileTmpl: '<link rel="stylesheet" href="%s">',
				appRoot: 'dev/public'
			},
			files: {
				'.tmp/public/index.html': ['dev/public/css/styles.min.css']
			}
		},*/


	});

	grunt.loadNpmTasks('grunt-sails-linker');
};
