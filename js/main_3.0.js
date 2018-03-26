$(window).on("load", function() {
    particlesJS.load('particles-js', "js/particles.json", function() {
        console.log('callback - particles.js config loaded');
    });


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
        $(".fadeIn").each(function(t) {
            var a = $(this).offset().top + $(this).outerHeight(),
                o = $(window).scrollTop() + $(window).height();
            o > a && "0" == $(this).css("opacity") && (e($(this)), $(this).removeClass("fadeIn"))
        })
    }


    function o(e, t, a) {
        e.fadeOut(t, function() {
            e.attr("src", a), e.fadeIn(t)
        })
    }
    $("#downArrow").hover(function() {
        o($(this), 150, "img/icons/greenArrow.png")
    }, function() {
        o($(this), 150, "img/icons/whiteArrow.png")
    });

    $("#downArrow").on("click", function() {
        t($(".content"))
    })

    $(".loader-wrapper").fadeOut("slow");
    a();
    $(document).scroll(function() {
        a()
    })
});
