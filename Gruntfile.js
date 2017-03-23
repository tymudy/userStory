'using strict';

module.exports = function(grunt){

    grunt.initConfig({

            jshint:{
                options:{
                    jshintrc:'.jshintrc',
                    reporter:require('jshint-stylish')
                },
                all:{
                    src:['Gruntfile,js','js/{,*/}*.js']
                }
            },
            sass: {
                options: {
                    sourceMap: true
                },
                dist: {
                    files: {
                        'main.css': 'main.scss'
                    }
                }
            }
    });

grunt.registerTask('default', ['sass']);

}