var projects = [{
	id: 0,
	title: "Point-To-Speech",
	description: "<a target='_blank' href='https://devpost.com/software/point-to-speech-rvsa0y'>MasseyHacks 3 - 3rd Place Finalist.</a><br><br>Created a device to help blind people read regular pages of text using simple, intuitive hand gestures. A Raspberry Pi with a connected camera was attached to PVC pipe. The paper was placed below the camera, with a LeapMotion attached with a 3D printed stand in front of it.<br><br> Once the user places the paper in position, the camera takes a picture and sends it to a server. Then, the accompanying web application uses <a href='http://tesseract.projectnaptha.com/' target='_blank'>TesseractJS</a> to parse the text.<br><br> Using calculated offset and conversion factors, the coordinates returned by the program were mapped for the LeapMotion - so that the word had a location in physical space.<br><br> Then, when the user points to a word on the page, the web app will say the word using <a href='https://responsivevoice.org/' target='_blank'>ResponsiveVoiceJS</a>. ",
	images: ["MH1.jpg", "MH2.jpg", "MH3.jpg", "MH4.jpg"],
	type: "hack",
	thumbnail: "MH1.jpg",
	languages: ["HTML", "CSS", "JS", "PHP", "Python", "Raspberry Pi", "Leap Motion", "jQuery", "node.js", "AJAX"]
}, {
	id: 1,
	title: "DriveBud",
	description: "<a target='_blank' href='https://github.com/IbrahimIrfan/drivebudapp'>GitHub</a><br><br>For my group's SHAD Valley project, we decided to address the yearly theme of reducing environmental footprint with DriveBud.<br><br>Partnering with my employer Geotab, a large fleet management telematics company, we used their GO7 Device to track vehicle data. This device would plug into a customers car and send statistics to the DriveBud app. The app presents the data to the user in a fun, friendly way and makes eco-friendly driving appealing.<br><br>Our project team will be advancing to the National stage in October.<br><br><iframe width='560' height='315' src='https://www.youtube.com/embed/ctLM8qvnsoc' frameborder='0' allowfullscreen></iframe>",
	images: [],
	type: "personal",
	thumbnail: "drive.png",
	languages: ["Swift 3"]
}, {
	id: 2,
	title: "DECA Exam Parser",
	description: "<a target='_blank' href='https://github.com/IbrahimIrfan/DECA-exam-parser'>Exam Parser</a> &middot; <a target='_blank' href='https://github.com/IbrahimIrfan/DECA-Web-App'>Web Application</a> <br><br> Created a program to parse poorly formatted PDF practice exams and output self marking online forms for my high school's DECA club (a case competition). <br><br> I also implemented a registration and login system with PHP and SQL for members to take those exams under their name on our website; allowing the executives to monitor their progress.<br><br> Other functionality included executive-only announcement posting (along with email notifications once an announcement is posted), as well as other resources for each event.",
	images: ["DECA2.jpg", "DECA3.jpg", "DECA4.jpg", "DECA5.jpg", "DECA6.jpg", "DECA7.jpg", "DECA8.jpg", "DECA9.jpg"],
	type: "personal",
	thumbnail: "DECA.png",
	languages: ["HTML", "CSS", "JS", "PHP", "SQL", "jQuery", "node.js", "AJAX"]
},  {
	id: 3,
	title: "University of Guelph Exam Network",
	description: "<a target='_blank' href='http://uog.viceroymedia.net/'>View</a> <br><br>During my internship as a Software Developer for Viceroy Media, I worked on an exam network web application for the University of Guelph.<br><br>It contained a file upload system where UofG students could upload study material for specific courses for others to use. The application also included a login system with Facebook API integration, a public forum, and course/professor ratings.<br><br> My specific role was to develop the functionality for the file system (uploading, managing, and viewing the uploaded material) and login system - working with JS/jQuery and API requests to do so.",
	images: ["uog.jpg", "uog2.jpg", "uog3.jpg", "uog4.jpg", "uog5.jpg"],
	type: "work",
	thumbnail: "uog.jpg",
	languages: ["HTML", "CSS", "JS", "SQL", "jQuery", "node.js", "AJAX", "Go"]
}, {
	id: 4,
	title: "BridgeDay Conference Registration System",
	description: '<a target="_blank" href="https://bridgeday.000webhostapp.com/">View</a> &middot; <a target="_blank" href="https://github.com/IbrahimIrfan/bridgeday">GitHub</a> <br><br>Created a conference registration system for over 300 students. As workshops were filled on a first come first serve basis, I implemented a live "Workshop Status" display, indicating the spaces currently available in each workshop. Additionally, I created a program which would generate nametags for every student attending the conference.<br><br>',

	images: ["bridgeday.jpg", "bridgeday2.jpg", "bridgeday3.jpg", "bridgeday4.jpg", "nametags.jpg"],
	type: "personal",
	thumbnail: "bridgeday.jpg",
	languages: ["HTML", "CSS", "JS", "PHP", "SQL", "jQuery", "AJAX"]
}, {
	id: 5,
	title: "Self-Aiming Cannon",
	description: "<a target='_blank' href='https://github.com/edwinzhng/automatic-cannon'>GitHub</a><br><br>Self-aiming cannon that automatically calculates trajectories towards a target built using Python, Go, and a RaspberryPi. Recognizes a face with SkyBiometry API after taking a picture and aims towards it. Includes remote control with keyboard input through a socket connection.<br><br><iframe width='560' height='315' src='https://www.youtube.com/embed/_aEoWWzmeTo?rel=0&showinfo=0' frameborder='0' allowfullscreen></iframe>",
	images: ["cannon.jpg", "cannon2.jpg"],
	type: "school",
	thumbnail: "cannon.jpg",
	languages: ["Python", "JS", "Go"]
}, {
	id: 6,
	title: "Tragic Heroes iOS Game",
	width: 640,
	description: "For a creative project in my English class, I chose to create a game to explain the concept of tragic heroes. <br><br><iframe width='560' height='315' src='https://www.youtube.com/embed/T9b6KoyhZhQ?rel=0&showinfo=0' frameborder='0' allowfullscreen></iframe>",
	images: [],
	type: "school",
	thumbnail: "tragic.jpg",
	languages: ["Swift 3"]
}, {
	id: 7,
	title: "Pinch Perfect",
	description: "As a HackWestern 3 project, this instrument requires no physical contact to play. The LeapMotion tracks your hand movements and plays a note accordingly. Using your right hand, you control the frequency, while your left-hand controls volume.<br><br> To play, all you need to do is pinch your fingers on your right hand. The x-axis controls pitch modulation to produce a vibrato, so by shaking your right hand side to side, you can create a sound that mimics the human voice.<br><br> In game mode, you can follow the purple bar depicted on the screen to play some of your favorite songs, whereas in free play, you are free to create and practice. You can also create and upload your own songs for others to play and enjoy.<br><iframe width='560' height='315' src='https://www.youtube.com/embed/1CgmxwbYQOI?rel=0&showinfo=0' frameborder='0' allowfullscreen></iframe>",
	images: ["pinch.jpg", "pinch2.jpg", "pinch3.jpg", "pinch4.jpg"],
	type: "hack",
	thumbnail: "pinchUpdate.jpg",
	languages: ["HTML", "CSS", "JS", "PHP", "SQL", "jQuery", "AJAX"]
}, {
	id: 8,
	title: "Hack the Fridge",
	description: "<a target='_blank' href='https://github.com/derrekchow/hackthefridge'>GitHub</a><br><br><a target='_blank' href='https://devpost.com/software/hack-the-fridge'>Hack the North 2017 - Honourable Mention</a><br><br>Hack the Fridge is a smart fridge which takes a picture of each food item as it is placed in the fridge and compiles a list of possible recipes based on that item and the items already in the fridge. It also records the date each food was added and keeps track of their expiry.<br><br> We took pictures using a Raspberry Pi camera with Python and sent them to a Node.js server on AWS. Each food item was stored as an object using MongoDB, the data was then presented on an iOS app.",
	images: ["htf.jpg", "htf2.jpg", "htf3.jpg", "htf4.jpg", "htf5.jpg", "htf6.jpg"],
	type: "hack",
	thumbnail: "htf.jpg",
	languages: ["NodeJS, Python, MongoDB, Swift 3"]
}, {
	id: 9,
	title: "2 Player Chess Game",
	description: "<a target='_blank' href='https://github.com/IbrahimIrfan/chess'>GitHub</a><br><br>My final project for Grade 11 Computer Science - a two-player Chess game built with Turing. One of the most difficult yet satisfying projects I have taken on. The final product was nearly fully functional.",
	images: ["chess.jpg", "chess2.jpg", "chess3.jpg", "chess4.jpg"],
	type: "school",
	thumbnail: "chess.jpg",
	languages: ["Turing"]
}, {
	id: 10,
	title: "Geotab HR Automation System",
	description: "For the summer of 2017, I was a Jr. Software Developer Intern for the HR Department at Geotab. My job was to increase the efficiency of Geotab's HR Department by automating many tedious, time-consuming tasks. I created a collection of Docs, Forms, and Spreadsheets using Google Apps Script to automate many of the tasks, summarized below. <br><br>•  Job Applications<br>•  Interviews<br>•  Handling Employee Files<br>•  Scheduling Meetings<br>•  Emails<br>•  Internal Reporting<br>•  Resume Parsing<br>•  Workshop Registration<br>•  Performance Reviews<br>•  File Revision History",
	images: ["geotab.png"],
	type: "work",
	thumbnail: "geotab.png",
	languages: ["Google Apps Script"]
}, {
	id: 11,
	title: "ITEE Group Canada",
	description: "<a target='_blank' href='http://iteegroupcanada.com/index.html'>View</a> &middot; <a target='_blank' href='https://github.com/IbrahimIrfan/itee'>GitHub</a><br><br>Freelance develoment work for a small local consulting firm, ITEE Group Canada. Created an infomational website dislaying information with an email contact form.",
	images: ["itee.png", "itee2.png"],
	type: "work",
	thumbnail: "thinktank.jpg",
	languages: ["HTML", "CSS", "JS", "jQuery", "PHP"]
}];
$(window).on("load", function () {
  particlesJS.load('particles-js', {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 300,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 12,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 800,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 800,
        "size": 80,
        "duration": 2,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
, function() {
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
  if(queryNum != null && window.location.hash.substr(1) == "modal"){
    i(parseInt(queryNum));
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
