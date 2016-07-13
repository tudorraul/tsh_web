module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        sass: {
            options: {
                // style: 'compressed'   
            },
            dist: {
                files: {
                    'public/css/assets.css': 'scss/assets.scss',
                    'public/css/main.css': 'scss/main.scss'
                }
            }
        },
        concat: {
            basic: {
                src: [
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
                    'bower_components/jquery/dist/jquery.js'
                ],
                dest: 'public/js/assets.js'
            }
        },
        copy: {
            main: {
                expand: false,
                src: 'bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff2',
                dest: 'public/fonts/bootstrap/glyphicons-halflings-regular.woff2'
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');


    // Default task(s).
    grunt.registerTask('default', [/*'uglify'*/, 'sass']);

};