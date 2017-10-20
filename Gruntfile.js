module.exports=function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), concat:{
            javascript: {
                src: 'app/**/*.js',
                dest: 'public/js/build/script.js'
            }

        }, uglify:{
            javascript:{
                files:{
                    'public/js/build/script.min.js': '<%= concat.javascript.dest %>'
                }
            }
        }, watch:{
            javascript:{
                files: ['<%= concat.javascript.src %>'],
                task: ['concat:javascript','uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-serve');
    grunt.registerTask('default',['concat','uglify','watch']);
}