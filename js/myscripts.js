/**
 * My custom scripts for CSS styles
 */


/*  This JQuery functions inits specified classes
*/
$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown();
    $('.slider').slider({
                          full_width: true,
                          height : 600, // default - height : 400
                          interval: 20000, // default - interval: 6000
                          duration: 1000 // default - duration: 500
                          });
    });



