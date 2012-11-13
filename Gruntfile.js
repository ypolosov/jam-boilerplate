'use strict';

module.exports = function( grunt ) {

    grunt.initConfig({

        // watches files for changes and automatically reloads them

        watch: {

            scripts: {
                files: '<config:lint.files>',
                tasks: 'concat reload'
            },

            css: {
                files: [
                    'blocks/**/*.css',
                    'blocks/**/*.styl',
                    'blocks/**/*.less'
                ],
                tasks: 'styletto:dev styletto:dev_ie reload'
            },

            reload: {
                files: [
                    '*.html'
                ],
                tasks: 'reload'
            }
        },

        // concat, compress and compile css

        styletto: {

            dev: {
                src: [
                    'blocks/i-reset/i-reset.styl',
                    'lib/**/*.css',
                    'blocks/b-*/**/!(!*|*.ie).css',
                    'blocks/b-*/**/!(!*|*.ie).styl',
                    'blocks/b-*/**/!(!*|*.ie).less'
                ],
                dest: 'publish/style.css',
                errors: "alert",
                nib: false
            },

            dev_ie: {
                src: [
                    'blocks/i-reset/i-reset.ie.styl',
                    'lib/**/*.css',
                    'blocks/b-*/**/!(!*)*.ie.css',
                    'blocks/b-*/**/!(!*)*.ie.styl',
                    'blocks/b-*/**/!(!*)*.ie.less'
                ],
                dest: 'publish/style.ie.css',
                errors: "alert",
                nib: false
            },

            publish: {
                src: '<config:styletto.dev.src>',
                dest: 'publish/style.min.css',
                compress: true,
                base64: true,
                errors: "error",
                nib: false
            },

            publish_ie: {
                src: '<config:styletto.dev_ie.src>',
                dest: 'publish/style.ie.min.css',
                compress: true,
                base64: true,
                errors: "error",
                nib: false
            }

        },

        // concat js files together

        concat: {
            dist: {
                src: [
                    'lib/consoleshiv.js',
                    'lib/**/!(jquery.min|html5shiv|consoleshiv).js',
                    'blocks/**/*.js'
                ],
                dest: 'publish/script.js'
            }
        },

        // minify js files with uglify.js

        min: {
            dist: {
                src: '<config:concat.dist.dest>',
                dest: 'publish/script.min.js'
            }
        },

        // linting js files with JSHint

        lint: {
            files: [
            'Gruntfile.js',
                'lib/**/*.js',
                'blocks/**/*.js'
            ]

        },

        // specifying JSHint options and globals
        // https://github.com/cowboy/grunt/blob/master/docs/task_lint.md#specifying-jshint-options-and-globals

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                browser: true
            },
            globals: {
                jQuery: true
            }
        },

        // development server for LiveReload

        server: {
            base: process.cwd()
        }

    });

    console.log(process.cwd());

    // some default tasks

    grunt.registerTask('default', 'concat styletto:dev styletto:dev_ie');
    grunt.registerTask('reloader', 'concat styletto:dev styletto:dev_ie server');
    grunt.registerTask('publish', 'concat lint min  styletto:dev styletto:dev_ie csslint styletto:publish styletto:publish_ie');

};
