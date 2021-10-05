var hasBlured = false;
var timecode = [];

$("video").each(function() {
	var src = $(this).find("source").attr("src");
	$(this).attr("data-src", src);
})

function blur() {
	hasBlured = true;
	timecode = [];
	$("video").each(function() {
		$(this).get(0).pause();
		var currentTime = $(this).get(0).currentTime;
		timecode.push(currentTime);
		$(this).attr("src", "");
	})
}
function focus() {
	if (timecode.length && hasBlured) {
		hasBlured = false;
		var x = 0;
		$("video").each(function() {
			var src = $(this).attr("data-src");
			$(this).attr("src", src);
			$(this).get(0).currentTime = timecode[x];
			x += 1;
		})
	}
}

/*$(".special video").each(function() {
	$(this).get(0).currentTime = 60*6;
});*/

/*document.getElementById('s1').addEventListener('loadedmetadata', function() {
	this.currentTime = 60*6;
	this.play();
}, false);
document.getElementById('s2').addEventListener('loadedmetadata', function() {
	this.currentTime = 60*6;
	this.play();
}, false);*/

//$("a").click(blur);
window.onblur = blur;
window.onfocus = focus;