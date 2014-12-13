module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      
    uglify: {
      build: {
        src: ['grunt-challenge/js/app.js'],
        dest: 'grunt-challenge/js/app.min.js'
      }
    },
    jshint: {
      src: 'js/app.js',
      dest: 'js/app.js'
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'release/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'release/css/',
        ext: '.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['uglify', 'jshint', 'cssmin']);

};