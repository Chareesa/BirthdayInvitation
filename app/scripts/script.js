$(document).ready(function() {
	var vid = document.getElementById('bgaudio');
	vid.volume = 0.4;
	$("#charlaVroomVroomContainer").animate({left: "+=2500"}, 19000);
});

function playVideo() {
	var video = document.getElementById('bgaudio');
	if (video.paused) {
		video.play(); 
		document.getElementById('audioBtn').src = "./media/pause.png";
	} else {
	 video.pause();
	 document.getElementById('audioBtn').src = "./media/play.png";
	}
}
