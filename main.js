function funcError(){
    alert("This function is not working yet :(");

    document.getElementById('sound').play();
}

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
    observer.observe(elm);
}

$("#services_button").click(function() {
    $('html,body').animate({
            scrollTop: $("#services").offset().top},
        'fast');
});


function initializeButton(buttonId) {
    var audio = new Audio('sounds/wind_sound.wav')
    const Button = document.getElementById(buttonId);
    Button.addEventListener("click", function () {
        audio.play();
    });
}

initializeButton("Button3");

// Get references to the image and video elements
const images = [document.getElementById("image1"), document.getElementById("image2"), document.getElementById("image3")];
const videos = [document.getElementById("video1"), document.getElementById("video2"), document.getElementById("video3")];

// Add event listeners to each image and video
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", function (e) {
        images[i].style.display = "none";  // Hide the image
        videos[i].style.display = "block"; // Show the video
        videos[i].play();                 // Start playing the video
    });

    videos[i].addEventListener("mouseout", function (e) {
        videos[i].style.display = "none"; // Hide the video
        images[i].style.display = "block"; // Show the image
        videos[i].pause();                // Pause the video
    });
}
















