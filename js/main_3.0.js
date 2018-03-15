$(window).on("load", function () {
	particlesJS.load('particles-js', "js/particles.json", function() {
		console.log('callback - particles.js config loaded');
	});

	function getParameterByName(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	var queryNum = getParameterByName("project");
	var queryNum2 = getParameterByName("p");
	if(queryNum != null && window.location.hash.substr(1) == "modal"){
		i(parseInt(queryNum));
	} else if (queryNum2 != null && window.location.hash.substr(1) == "modal"){
		i(parseInt(queryNum2));
	}


	function e(e) {
		e.css("margin-top", "+=30px"), e.animate({
			opacity: "1",
			"margin-top": "+=30px"
		}, 1e3)
	}

	function t(e) {
		$("html,body").animate({
			scrollTop: e.offset().top
		}, 1e3)
	}

	function a() {
		$(".fadeIn").each(function (t) {
			var a = $(this).offset().top + $(this).outerHeight(),
				o = $(window).scrollTop() + $(window).height();
			o > a && "0" == $(this).css("opacity") && (e($(this)), $(this).removeClass("fadeIn"))
		})
	}

	function i(num){
		if (document.location.href = "#modal", projectClicked = projects[num], window.history.pushState("index", "Project", "/?project=" + num + "#modal"),$(".remodal").empty(), toAppend = '<center><button data-remodal-action="close" class="remodal-close"></button>', toAppend += '<h1 style="font-size: 45px; font-family: Equal;">' + projectClicked.title + "</h1>", 0 != projectClicked.images.length) {
			toAppend += '<div class="csslider1 no-autoplay" style="max-width: 640px;">';
			for (var t = 0; t < projectClicked.images.length; t++) toAppend += '<input name="cs_anchor1" id="cs_slide1_' + t + '" type="radio" class="cs_anchor slide"', 0 == t && (toAppend += ' checked=""'), toAppend += ">";
			toAppend += "<ul>";
			for (var t = 0; t < projectClicked.images.length; t++) 0 == t && (toAppend += '<li class="cs_skeleton"><img src="cssslider_files/csss_images1/' + projectClicked.images[t] + '" style="width: 100%;"></li>'), toAppend += '<li class="num' + t + ' img slide"> <img src="cssslider_files/csss_images1/' + projectClicked.images[t] + '" alt="' + projectClicked.title + '" title="' + projectClicked.title + '"></li>';
			toAppend += '</ul><div class="cs_arrowprev">';
			for (var t = 0; t < projectClicked.images.length; t++) toAppend += '<label class="num' + t + '" for="cs_slide1_' + t + '"><span><i></i><b></b></span></label>';
			toAppend += '</div><div class="cs_arrownext">';
			for (var t = 0; t < projectClicked.images.length; t++) toAppend += '<label class="num' + t + '" for="cs_slide1_' + t + '"><span><i></i><b></b></span></label>';
			toAppend += "</div></div>"
		}
		toAppend += '</center><div class="langs">' + projectClicked.languages[0];
		for (var t = 1; t < projectClicked.languages.length; t++) toAppend += ", " + projectClicked.languages[t];
		toAppend += '</div><br><p class="projectDesc">' + projectClicked.description + "</p>", toAppend += '<button data-remodal-action="confirm" class="remodal-confirm">O K</button>', $(".remodal").append(toAppend)
	}

	function o(e, t, a) {
		e.fadeOut(t, function () {
			e.attr("src", a), e.fadeIn(t)
		})
	}! function (e) {
		e("ul.tabs").addClass("active").find("> li:eq(0)").addClass("current"), e("ul.tabs li a").click(function (t) {
			var a = e(this).closest(".tab"),
				o = e(this).closest("li").index();
			a.find("ul.tabs > li").removeClass("current"), e(this).closest("li").addClass("current"), a.find(".tab_content").find("div.tabs_item").not("div.tabs_item:eq(" + o + ")").slideUp(), a.find(".tab_content").find("div.tabs_item:eq(" + o + ")").slideDown(), t.preventDefault()
		})
	}(jQuery), $(".loader-wrapper").fadeOut("slow"), $("#downArrow").hover(function () {
		o($(this), 150, "img/icons/greenArrow.png")
	}, function () {
		o($(this), 150, "img/icons/whiteArrow.png")
	}), $("#downArrow").on("click", function () {
		t($(".content"))
	}), a(), $(document).on("click", ".mdl-card", function (e) {
		i($(e.currentTarget).attr("project"));
	}), $(".projectType").on("click", function (e) {
		$(".tab_content").remove();
		for (var t = $(e.currentTarget).attr("type"), a = 0; a < projects.length; a++) project = projects[a], project.type == t && (o = '<div class="tab_content"><div class="mdl-cell mdl-cell--4-col"><div project="' + project.id + '" class="mdl-card-square mdl-card">', o += '<img src="img/thumbnails/' + project.thumbnail + '" class="projectImg" alt="' + project.title + '">', o += "<center><figcaption>" + project.title + "</figcaption></center>", o += "</div></div></div>", $(".mdl-grid").append(o))
	}), $(document).scroll(function () {
		a()
	})
});
