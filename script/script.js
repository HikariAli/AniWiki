function mySearch() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        } else {
        li[i].style.display = "none";
        }
    }
}

function fadeInTitle() {
    const h1Ele = document.querySelector(".titlu");
    h1Ele.classList.add("fadeIn");
}


const sp_audio = document.getElementById("Sponge_sound");
const sp_button = document.getElementById("Sponge_theme");

sp_button.addEventListener("click", function() {
    if (sp_audio.paused) {
        sp_audio.play();
    } else {
        sp_audio.pause();
    }
});

const avatar_audio = document.getElementById("avatar_sound");
const avatar_button = document.getElementById("avatar_theme");

avatar_button.addEventListener("click", function() {
    if (avatar_audio.paused) {
        avatar_audio.play();
    } else {
        avatar_audio.pause();
    }
});

const danny_audio = document.getElementById("danny_sound");
const danny_button = document.getElementById("danny_theme");

danny_button.addEventListener("click", function() {
    if (danny_audio.paused) {
        danny_audio.play();
    } else {
        danny_audio.pause();
    }
});