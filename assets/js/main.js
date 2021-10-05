window.onpageshow = function(event) {
	if (event.persisted) {
		window.location.reload();
	}
};

if (window.location.hash == "#test") {
	$(".hidden").removeClass("hidden");
}


$(".work .img_nav img").click(function() {
	var src = $(this).attr("src");
	$(".item").hide();
	$(".item img[src$='"+src+"']").parent().show()
});

//var space = 230;
var space = 270;
function setH(that) {
	var h = $(that).parent().height();
	var m = Math.round(space - h);
	$(that).parent().css("margin-bottom", m+"px");
}

$("#overview img").each(function() {
	setH(this);

	$(this).on('load', function(){
		var that = this;
		setH(that);
		setTimeout(function() {
			setH(that);
		}, 1000);
	});
});

$("#overview video").each(function() {
	setH(this);

	$(this).on('load', function(){
		var that = this;
		setH(that);
		setTimeout(function() {
			setH(that);
		}, 1000);
	});
});
