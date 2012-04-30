/**
 * @desc Configuration file
 * for build javascript and css files.
 */

({
    baseUrl: '../assets/javascripts',
    // create build project direcotry
    dir: '../build/javascripts',
    inlineText: true,
    findNestedDependencies: true,
    // disable minification
    optimizeCss: 'none',
    modules: [{
        name: 'index'
    }, {
        name: 'pages/biology',
        exclude: ['text']
    }, {
        name: 'pages/index',
        exclude: ['text']
    }]
})
