$(window).on("load", function() {
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
    if (queryNum != null && window.location.hash.substr(1) == "modal") {
        i(parseInt(queryNum));
    } else if (queryNum2 != null && window.location.hash.substr(1) == "modal") {
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
