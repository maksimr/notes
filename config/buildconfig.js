/**
 * @desc Configuration file
 * for build javascript and css files.
 */

({
    appDir: '../',
    baseUrl: 'assets/javascripts',
    // create build project direcotry
    dir: '../../notes-build',
    inlineText: true,
    findNestedDependencies: true,
    // disable minification
    optimizeCss: 'none',
    modules: [{
        name: 'index'
    }, {
        name: 'pages/biology'
    }, {
        name: 'pages/index'
    }]
})
