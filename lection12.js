'use strict';

// sonar система учета кода

// https://github.com/squizlabs/PHP_CodeSniffer


requirejs(["jquery", "util"], function($) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
    $(function() {
        console.log('loaded');
    });
    console.log($(document));
    console.log(window);
    console.dir(new MyObject());
});

requirejs(["util"], function(util) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
    console.log(util);
    console.log(window);
    console.dir(new MyObject());
});