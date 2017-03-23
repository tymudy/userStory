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
            },
            watch: {
                scripts : {
                    tasks : ['default']
                }
            }
    });
    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass']);

}