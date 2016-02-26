module.exports = function(grunt) {
    grunt.log.writeln("Shell ruby registered");
    grunt.config.set('shell', {
        rubydev: {
            command: function () {
                return 'ruby app.rb';
            },
            options: {
                stderr: true,
                stdout:true,
                execOptions: {
                    cwd: 'dev'
                },
                callback:function(err, stdout, stderr, cb){
                    if(err){
                        grunt.log.error(err);
                    } else {
                        //grunt.log.info("localhost:4567");
                        grunt.log.writeln("------------------------");
                        grunt.log.writeln("Sinatra: localhost:4567");
                        grunt.log.writeln("------------------------");
                    }
                }
            }
        },
        rubyprod: {
            command: function () {
                return 'ruby app.rb';
            },
            options: {
                stderr: false,
                execOptions: {
                    cwd: 'www'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
};
