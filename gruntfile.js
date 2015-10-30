module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            sitecss: {
                options: {
                    banner: '/* My minified css file */'
                },
                files: {
                    'css/bundle/os-mt-popup.min.css': [
                        'css/normalize.css',
                        'css/popups.css'
                    ],

                    'css/bundle/os-mt-core.min.css': [
                        'css/mindtouch.custom.all.css',
                        'css/common.css'
                    ],
                    'css/bundle/os-mt-kbs.min.css': [
                        'css/evaluation-kb.css',
                        'css/learn-kb.css',
                        'css/support-kb.css'
                    ]
                }
            }
        },
        watch: {
            files: ['<%= cssmin.sitecss.files %>'],
            tasks: ['cssmin']
        }
        /*,
                uglify: {
                    options: {
                        compress: true
                    },
                    build: {
                        files: {
                            'js/bundle/os-portal.js': [
                                'js/src/portal-common.js',
                                'js/src/bootstrap.js'
                            ],
                            'js/bundle/os-portal-extra.js': [


                            ]
                        }
                    }
                }*/
    });
    // Default task.
    //grunt.registerTask('default', ['cssmin', 'uglify']);
    grunt.registerTask('default', ['cssmin']);
};
