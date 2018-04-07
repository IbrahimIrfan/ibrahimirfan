$(window).on("load", function() {
	// todo: fadeIn elements 
    function e(e) {
        e.css("margin-top", "+=30px");
		e.animate({
            opacity: "1",
            "margin-top": "+=30px"
        }, 1e3)
    }

    function a() {
        $(".fadeIn").each(function(t) {
            var a = $(this).offset().top + $(this).outerHeight(),
                o = $(window).scrollTop() + $(window).height();
            o > a && "0" == $(this).css("opacity") && (e($(this)), $(this).removeClass("fadeIn"))
        })
    }

	    a();
    $(document).scroll(function() {
        a()
    })
});
