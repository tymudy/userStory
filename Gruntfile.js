'using strict';

module.exports = function(grunt){

    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
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
                        'assets/css':'scss/partials/{,*/}*.scss'
                    }
                }
            }
    });

grunt.registerTask('default', ['sass']);

}