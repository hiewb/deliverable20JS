var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");

    video = document.querySelector("#player1");
    console.log(video);

    video.autoplay = false;
    video.loop = false;

    // Play Button
    document.querySelector("#play").addEventListener("click", function() {
        video.play();
        document.getElementById("volume").innerHTML = video.volume * 100 + "%";
    });

    // Pause Button
    document.querySelector("#pause").addEventListener("click", function() {
        video.pause();
    });

    // Slow Down Button
    document.querySelector("#slower").addEventListener("click", function() {
        video.playbackRate -= 0.1;
        console.log("New speed: " + video.playbackRate.toFixed(2));
    });

    // Speed Up Button
    document.querySelector("#faster").addEventListener("click", function() {
        video.playbackRate += 0.1;
        console.log("New speed: " + video.playbackRate.toFixed(2));
    });

    // Skip Ahead Button
    document.querySelector("#skip").addEventListener("click", function() {
        if (video.currentTime + 10 >= video.duration) {
            video.currentTime = 0;
        } else {
            video.currentTime += 10;
        }
        console.log("Current location: " + video.currentTime.toFixed(2));
    });

    // Mute Button
    document.querySelector("#mute").addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            document.querySelector("#mute").textContent = "Mute";
        } else {
            video.muted = true;
            document.querySelector("#mute").textContent = "Unmute";
        }
    });

    // Volume Slider
    document.querySelector("#slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        updateVolumeInfo();
    });

    // Old School Button
    document.querySelector("#vintage").addEventListener("click", function() {
        video.classList.add("oldSchool");
    });

    // Original Button
    document.querySelector("#orig").addEventListener("click", function() {
        video.classList.remove("oldSchool");
    });

});