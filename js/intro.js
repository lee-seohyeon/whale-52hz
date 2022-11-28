let isPlaying = false;

window.onload = function () {
	const audio = document.getElementById("music");

	//음악재생 이미지 element
	const imageElem = document.getElementById("image_btn");
	$(function () {
		$("#image_btn").on("click", function (e) {
			e = e || window.event;
			if (isPlaying) {
				//일시정지
				audio.pause();
				isPlaying = false;
				//음악재생 이미지 변경 (play)
				imageElem.src = "img/musicplay-bt.png";
			} else {
				//재생
				audio.play();
				isPlaying = true;
				//음악재생 이미지 변경 (stop)
				imageElem.src = "img/musicstop-bt.png";
			}
		});
	});
};
