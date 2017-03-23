module.exports = function(grunt){

    'use strict';

    require('load-grunt-tasks')(grunt); 

    grunt.initConfig({

            pkg: grunt.file.readJSON('package.json'),
            jshint:{
                options:{
                    jshintrc:'.jshintrc',
                    reporter:require('jshint-stylish')
                },
                all:{
                    src:['Gruntfile.js','js/{,*/}*.js']
                }
            }/*,
            sass: {
                dist: {
                    files: {
                        expand: true,
                        cwd : 'scss/partials/',
                        src : '*.scss',
                        dest : 'assets/css/',
                        ext : '.css',
                        extDot : 'first'
                    }
                }
            },*/
          /* watch: {
                default : {
                    tasks : ['default']
                },
                livereload : {
                    options : {
                        livereload : true
                    },
                    files : ['assets']
                }
            }*/
    });
    
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint']);

};