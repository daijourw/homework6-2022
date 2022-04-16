var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
	// console.log("The current volume is" + video.volume)
	// javascript can concatenate strings and numbers
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
});
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate)
	video.playbackRate = video.playbackRate * 0.95
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate)
	video.playbackRate = video.playbackRate / 0.95
	console.log("New speed is " + video.playbackRate)
});
// skip ahead button
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current time is " + video.currentTime)
	video.currentTime += 15
	
	if (video.currentTime > video.duration) {
		video.currentTime = 0
	}
	console.log("New time is " + video.currentTime)

});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is " + video.muted)
	
	if (video.muted == true) {
		video.muted = false
		this.value = "Unmute"
	} else {
		video.muted = true
	}
	// check if currently muted, mute == true
	// set muted false and update text in button
	// else 
	// set muted to true

});
document.querySelector("#slider").addEventListener("click", function() {
	// attribute to know what people typing in
	console.log(this.value)
	video.volume = this.value / 100
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	// use .alue to upate video volume and update volume element below
	// slider returns 0-100, gotta convert to divide by 100
});
document.querySelector("#vintage").addEventListener("click", function() {
	document.querySelector(".video").className = "oldSchool"
	// document.getElementsByName("video").className = "oldSchool"
});
document.querySelector("#orig").addEventListener("click", function() {
	// document.getElementsByName("video").className = "video"
	document.querySelector(".oldSchool").className = "video"
});

/* <button id = "vintage">Old School</button>
<button id = "orig">Original</button> */