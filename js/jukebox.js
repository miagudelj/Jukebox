/**
* play song
*/
function playAudio(eId) {
    var aels = document.getElementsByClassName("jbi");
    for (var i = 0; i < aels.length; i++) {
        aels[i].pause();
    }
    document.getElementById(eId).play();

}
/**
 * pause
 */
function pauseAudio() {
    var aels = document.getElementsByClassName("jbi");
    for (var i = 0; i < aels.length; i++) {
        aels[i].pause();
    }
} 


/**
* mute
*/

function muteAudio() {

    var aels = document.getElementsByTagName("audio");
   let muted;


    if ( aels[0].volume === 0) {
        for (var i = 0; i < aels.length; ++i) {
            aels[i].volume = 1;
        }
    }
    else {
        for (var i = 0; i < aels.length; ++i) {
            aels[i].volume = 0;
        }
    }
}



