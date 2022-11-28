window.onload = function () {
	const bodyEl = document.querySelector("body"); //body태그
	const focusEl = document.querySelector("#focus"); //마우스커서

	const image = window.document.getElementById("whale_image");
	let top = rand(0, bodyEl.clientHeight - image.offsetHeight);
	let left = rand(0, bodyEl.clientWidth - image.offsetWidth);
	image.style.top = top + "px";
	image.style.left = left + "px";

	const image2 = window.document.getElementById("whale_image2");
	let top2 = rand(0, bodyEl.clientHeight - image2.offsetHeight);
	let left2 = rand(0, bodyEl.clientWidth - image2.offsetWidth);
	image2.style.top = top2 + "px";
	image2.style.left = left2 + "px";

	const image3 = window.document.getElementById("whale_image3");
	let top3 = rand(0, bodyEl.clientHeight - image3.offsetHeight);
	let left3 = rand(0, bodyEl.clientWidth - image3.offsetWidth);
	image3.style.top = top3 + "px";
	image3.style.left = left3 + "px";

	const imagePosition = image.getBoundingClientRect(); //image의 x, y 포지션값
	const image2Position = image2.getBoundingClientRect();
	const image3Position = image3.getBoundingClientRect();
	//마우스이동 이벤트 마우스가 움직일때마다 이벤트감지
	document.addEventListener(
		"mousemove",
		(trackMouse = (event) => {
			const focusElX = event.clientX + "px";
			const focusElY = event.clientY + "px";

			focusEl.style.background = `radial-gradient(
        circle ${getScreenAvg() * 0.1}px at ${focusElX} ${focusElY},
        rgba(0, 0, 0, 0) 0%, 
        rgba(0, 0, 0, 0) 30%,
        rgba(0, 0, 0, 1) 100%`;

			if (
				event.clientX > imagePosition.x &&
				event.clientX < imagePosition.right &&
				event.clientY > imagePosition.y &&
				event.clientY < imagePosition.bottom
			) {
				setTimeout(() => {
					// window.open('result1.html')
					location.href = "result1.html";
				}, 2000);
				alert("나를 찾아주었구나!");
			}

			if (
				event.clientX > image2Position.x &&
				event.clientX < image2Position.right &&
				event.clientY > image2Position.y &&
				event.clientY < image2Position.bottom
			) {
				alert("52hz 고래를 찾아줘");
			}

			if (
				event.clientX > image3Position.x &&
				event.clientX < image3Position.right &&
				event.clientY > image3Position.y &&
				event.clientY < image3Position.bottom
			) {
				alert("52hz 고래를 찾아줘");
			}
		})
	);

	//마우스 커서 크기 설정
	function getScreenAvg() {
		return Math.floor((bodyEl.clientWidth + bodyEl.clientHeight) * 0.3);
	}

    const audio = document.getElementById("music");
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

//랜덤범위값 추출
function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let isPlaying = false;



