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
                    'blocks/b-*/**/*.css',
                    'blocks/b-*/**/*.styl',
                    'blocks/b-*/**/*.less'
                ],
                dest: 'publish/style.css',
                errors: 'alert',
                stylus: {
                    imports: [
                        'blocks/config.styl',
                        'blocks/i-mixins/i-mixins__clearfix.styl',
                        'blocks/i-mixins/i-mixins__vendor.styl',
                        'blocks/i-mixins/i-mixins__gradients.styl',
                        'blocks/i-mixins/i-mixins__if-ie.styl'
                    ]
                }

            },

            dev_ie: {
                src: [
                    'blocks/i-reset/i-reset.styl',
                    'lib/**/*.css',
                    'blocks/b-*/**/*.css',
                    'blocks/b-*/**/*.styl',
                    'blocks/b-*/**/*.less'
                ],
                dest: 'publish/style.ie.css',
                errors: 'alert',
                stylus: {
                    variables: { 'ie': true },
                    imports: [
                        'blocks/config.styl',
                        'blocks/i-mixins/i-mixins__clearfix.styl',
                        'blocks/i-mixins/i-mixins__if-ie.styl'
                    ]
                }
            },

            publish: {
                src: '<config:styletto.dev.dest>',
                dest: '<config:styletto.dev.dest>',
                compress: true,
                base64: true,
                errors: 'error'
            },

            publish_ie: {
                src: '<config:styletto.dev_ie.dest>',
                dest: '<config:styletto.dev_ie.dest>',
                compress: true,
                base64: true,
                errors: 'error'
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
                dest: '<config:concat.dist.dest>'
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
            // uncommment to set custom port
            // port: 3502,
            base: process.cwd()
        }

    });

    console.log(process.cwd());

    // some default tasks

    grunt.registerTask('default', 'concat styletto:dev styletto:dev_ie');
    grunt.registerTask('reloader', 'concat styletto:dev styletto:dev_ie server');
    grunt.registerTask('publish', 'concat min styletto:dev styletto:dev_ie styletto:publish styletto:publish_ie');

};
