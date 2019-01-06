// ==UserScript==
// @name         Doubleclick4Fullscreen
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       https://github.com/RealDekkia/
// @match        https://www.twitch.tv/gamesdonequick
// ==/UserScript==

(function() {
    'use strict';

    var inFullScreen = false;

    function toggleFullScreen(element) {
    if (inFullScreen) {
        launchFullscreen(element);
        inFullScreen = false;
    } else {
        exitFullscreen();
        inFullScreen = true;
    }
}

function launchFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

    function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

    window.onload = function(){
        var dom = document.getElementsByClassName('video-player__container')[0];
        dom.addEventListener('dblclick',function(v){
            toggleFullScreen(document.documentElement);
        });
    }
})();
