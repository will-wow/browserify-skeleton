module.exports = function(grunt) {
    grunt.config.set('nodemon', {
        dev: {
            script: 'app.js',
            options: {
                nodeArgs: ['--debug'],
                env: {
                    PORT: '3000'
                },
                cwd:"dev",
                ext: 'js,coffee,hbs,scss'
            }
        }
    });

    grunt.loadNpmTasks('grunt-nodemon');
};
