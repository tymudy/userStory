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
                    src:['Gruntfile.js','js/**/*.js']
                }
            },
            sass: {
                dist: {
                    files: {
                        expand: true,
                        cwd : 'scss/partials/',
                        src : ['*.scss'],
                        dest : '../../assets/css/',
                        ext : '.css',
                        extDot : 'first'
                    }
                }
            }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass']);

}