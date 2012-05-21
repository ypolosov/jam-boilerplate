/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // the staging directory used during the process
    staging: 'intermediate',
    // final build output
    output: 'publish',
    // filter any files matching one of the below pattern during mkdirs task
    // the pattern in the .gitignore file should work too.
    exclude: '.git* build/** node_modules/** grunt.js package.json *.md'.split(' '),
    mkdirs: {
      staging: '<config:exclude>'
    },
    // concat css/**/*.css files, inline @import, output a single minified css
    // css: {
    //   'blocks/__style.css': ['blocks/**/*.css']
    // },
    watch: {
      scripts: {
        files: '<config:lint.files>',
        tasks: 'lint'
      },
      css: {
        files: ['blocks/**/*.css','blocks/**/*.styl','blocks/**/*.less'],
        tasks: 'styletto'
      }
    },
    styletto: {
      dev: {
        src: "blocks/style.css",
        dest: "blocks/__style.css",
        compress: "csso",
        base64: 15000,
        resolveFrom: ""
      },
      publish: {
        src: "blocks/style.css",
        dest: "blocks/__style.css",
        compress: "csso",
        base64: 15000,
        resolveFrom: ""
      }
    },
    csslint: {
      base_theme: {
        src: "blocks/**/*.css",
        rules: {
            "import": false,
            "overqualified-elements": 2,
            "unique-headings": false,
            "star-property-hack": false,
            "known-properties": false,
            "box-sizing": false,
            "qualified-headings": false
        }
      }
    },
    // Renames JS/CSS to prepend a hash of their contents for easier
    // versioning
    rev: {
      js: ['lib/**/*.js','blocks/**/*.js'],
      css: 'blocks/**/*.css',
      img: ['blocks/**/*.png','blocks/**/*.jpg','blocks/**/*.jpeg','blocks/**/*.gif']
    },
    // update references in html to revved files
    usemin: {
      files: ['**/*.html']
    },
    // html minification
    html: '<config:usemin>',
    // Optimizes JPGs and PNGs (with jpegtran & optipng)
    img: {
      dist: '<config:rev.img>'
    },
    meta: {
      version: '0.1.0',
      banner: '/*! JAM-BOILERPLATE - v<%= meta.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '* http://PROJECT_WEBSITE/\n' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
        'YOUR_NAME; Licensed MIT */'
    },
    lint: {
      files: ['grunt.js', 'blocks/**/*.js']
    },
    concat: {
      dist: {
        src: ['blocks/**/*.js'],
        dest: 'blocks/all.js'
      }
    },
    min: {
      dist: {
        src: 'blocks/all.js',
        dest: 'blocks/all.min.js'
      }
    },
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
    uglify: {}
  });

  grunt.loadNpmTasks('grunt-styletto');
  grunt.loadNpmTasks('grunt-css');

  // grunt.registerTask('default', 'styletto');
  grunt.registerTask('default', 'intro clean mkdirs concat csslint styletto min');
  grunt.registerTask('publish', 'intro clean mkdirs styletto concat min img'); // not tested, rev usemin?

  grunt.registerTask('reload', 'default connect watch:reload');

};
