"use strict";

const $ = require('jquery');

const sayHello = () => {
    console.log('Hello World!');
};
sayHello();

$('#main_header').click(function(){
    $(this).html('Got the DOM working!');
});
