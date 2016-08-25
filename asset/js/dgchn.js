function dgchn_init_page(){
	var pge_welcome = $("#pge-welcome");

	function init_pge_welcome(){
		var misc = pge_welcome.find(".misc");

		$.each(misc, function(){
			var colors = $(this).find(".color");

			var last, colours = ["#0185B6", "#00D39E", "#FFDE05", "#FE015E"];

			colors.each(function(){
				var color = colours.splice(Math.floor(Math.random() * colours.length), 1)[0];
				$(this).css("background-color", color);
				last && colours.push(last), last = color;
			});
		});
	}

	if(pge_welcome.length >= 1){
		init_pge_welcome();
	}
}

$(function(){
	dgchn_init_page();
});