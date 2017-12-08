var projects = [{
	id: 0,
	title: "Point-To-Speech",
	description: "MasseyHacks 3 - 3rd Place Finalist.<br><br>Created a device to help blind people read regular pages of text using simple, intuitive hand gestures. A Raspberry Pi with a connected camera was attached to PVC pipe. The paper was placed below the camera, with a LeapMotion attached with a 3D printed stand in front of it.<br><br> Once the user places the paper in position, the camera takes a picture and sends it to a server. Then, the accompanying web application uses <a href='http://tesseract.projectnaptha.com/' target='_blank'>TesseractJS</a> to parse the text.<br><br> Using calculated offset and conversion factors, the coordinates returned by the program were mapped for the LeapMotion - so that the word had a location in physical space.<br><br> Then, when the user points to a word on the page, the web app will say the word using <a href='https://responsivevoice.org/' target='_blank'>ResponsiveVoiceJS</a>. ",
	images: ["MH1.jpg", "MH2.jpg", "MH3.jpg", "MH4.jpg"],
	type: "hack",
	thumbnail: "MH1.jpg",
	languages: ["HTML", "CSS", "JS", "PHP", "Python", "Raspberry Pi", "Leap Motion", "jQuery", "node.js", "AJAX"]
}, {
	id: 1,
	title: "DriveBud",
	description: "For my group's SHAD Valley project, we decided to address the yearly theme of reducing environmental footprint with DriveBud.<br><br>Partnering with my employer Geotab, a large fleet management telematics company, we used their GO7 Device to track vehicle data. This device would plug into a customers car and send statistics to the DriveBud app. The app presents the data to the user in a fun, friendly way and makes eco-friendly driving appealing.<br><br>Our project team will be advancing to the National stage in October.<br><br><iframe width='560' height='315' src='https://www.youtube.com/embed/ctLM8qvnsoc' frameborder='0' allowfullscreen></iframe>",
	images: [],
	type: "personal",
	thumbnail: "drive.png",
	languages: ["HTML", "CSS", "JS", "Swift 3"]
}, {
	id: 2,
	title: "DECA Exam Parser",
	description: "Last year, my school's performance in DECA, a student business competition, was disappointing. Overall scores for competitors are determined by an interview and multiple-choice exam; we did great on the interviews, but lacked on the exams. <br><br> Since the exams that DECA releases are not in a user-friendly format, it was a hassle to practice, and it hindered our success. Not only that, our club was doing registration for over 200 members by hand.<br><br>Thus, I decided to completely redo our existing website, creating a program would read the practice exams that DECA releases and output self-marking online forms. I then implemented a registration and login system for members to take those exams under their name on our website; allowing the executives to monitor their progress.<br><br> Other functionality included executive-only announcement posting (along with email notifications once an announcement is posted), as well as other resources for each event.",
	images: ["DECA2.jpg", "DECA3.jpg", "DECA4.jpg", "DECA5.jpg", "DECA6.jpg", "DECA7.jpg", "DECA8.jpg", "DECA9.jpg"],
	type: "personal",
	thumbnail: "DECA.png",
	languages: ["HTML", "CSS", "JS", "PHP", "SQL", "jQuery", "node.js", "AJAX"]
},  {
	id: 3,
	title: "University of Guelph Exam Network",
	description: "During my internship as a Software Developer for Viceroy Media, I worked on an exam network web application for the University of Guelph.<br><br>It contained a file upload system where UofG students could upload study material for specific courses for others to use. The application also included a login system with Facebook API integration, a public forum, and course/professor ratings.<br><br> My specific role was to develop the functionality for the file system (uploading, managing, and viewing the uploaded material) and login system - working with JS/jQuery and API requests to do so.",
	images: ["uog.jpg", "uog2.jpg", "uog3.jpg", "uog4.jpg", "uog5.jpg"],
	type: "work",
	thumbnail: "uog.jpg",
	languages: ["HTML", "CSS", "JS", "SQL", "jQuery", "node.js", "AJAX", "Go"]
}, {
	id: 4,
	title: "BridgeDay Conference Registration System",
	description: 'At my high school, a full day conference is hosted every year where incoming students come to the shool for a day of talks, workshops, and introductions.<br><br>When 350 grade 8 students are coming to your school from many different locations, you need someone to take on the hectic registration process - that was my role.<br><br>I decided to make a conference website, showcasing the plan of the day and with important information for students and teacher supervisors. They were also able to register directly from the website - which allowed us to send various schools a simple link instead of a long google form.<br><br>Students had a choice of what workshops they wished to attend, with their preference indicated on the registration form. As workshops were filled on a first come first serve basis, I implemented a live "Workshop Status" display, indicating the spaces currently available in each workshop. Along with this, I created a program which would generate nametags for every student attending the conference.<br><br> Overall, this was a great opportunity for me to experience how to properly manage a registration system and how to correctly deal with data. In addition - the conference turned out very successful, with no major hiccups.',
	images: ["bridgeday.jpg", "bridgeday2.jpg", "bridgeday3.jpg", "bridgeday4.jpg", "nametags.jpg"],
	type: "personal",
	thumbnail: "bridgeday.jpg",
	languages: ["HTML", "CSS", "JS", "PHP", "SQL", "jQuery", "AJAX"]
}, {
	id: 5,
	title: "Self-Aiming Cannon",
	description: "Self-aiming cannon that automatically calculates trajectories towards a target built using Python, Go, and a RaspberryPi. Recognizes a face with SkyBiometry API after taking a picture and aims towards it. Includes remote control with keyboard input through a socket connection.<br><br><center><img src='img/source.gif' width='80%'></center>",
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
	description: "As a HackWestern 3 project, this instrument requires no physical contact to play. The LeapMotion tracks your hand movements and plays a note accordingly. Using your right hand, you control the frequency, while your left-hand controls volume.<br><br> To play, all you need to do is pinch your fingers on your right hand. The x-axis controls pitch modulation to produce a vibrato, so by shaking your right hand side to side, you can create a sound that mimics the human voice.<br><br> This hands-free system has a game mode and free play mode. In game mode, you can follow the purple bar depicted on the screen to play some of your favorite songs, whereas in free play, you are free to create and practice. You can also create and upload your own songs for others to play and enjoy. <br><br>It is great for people who cannot play an instrument due to disorders like arthritis or Parkinsons. Additionally, it is helpful for developing fine motor skills, as a therapeutic medium, or to help with ear training, and can be enjoyed by people of all ages.",
	images: ["pinch.jpg", "pinch2.jpg", "pinch3.jpg", "pinch4.jpg"],
	type: "hack",
	thumbnail: "pinchUpdate.jpg",
	languages: ["HTML", "CSS", "JS", "PHP", "SQL", "jQuery", "AJAX"]
}, {
	id: 8,
	title: "Hack the Fridge",
	description: "Hack the North 2017 - Honourable Mention<br><br>Our goal for Hack the North was to find a way to reduce food waste in an efficient and organized process. We set out to create a smart fridge to accomplish this goal and by implementing Watson's Visual Recognition API and various other technologies.<br><br>Hack the Fridge is a smart fridge which takes pictures of items put into it, keeps track of their expiry date, and gives recipe ideas in an effort to reduce food waste. The fridge takes a picture of each food item as it is placed in the fridge and compiles a list of possible recipes based on that item and the items already in the fridge. It also records the date each food item was added and keeps track of their expiry.<br><br>The fridge is made entirely from materials found at Hack the North, including all the food items we used. We took pictures using a Raspberry Pi and camera with Python and sent them to a Node.js server on AWS. Each food item was stored as an object using MongoDB, the data was then presented on an iOS app.",
	images: ["htf.jpg", "htf2.jpg", "htf3.jpg", "htf4.jpg", "htf5.jpg", "htf6.jpg"],
	type: "hack",
	thumbnail: "htf.jpg",
	languages: ["NodeJS, Python, MongoDB, Swift 3"]
}, {
	id: 9,
	title: "2 Player Chess Game",
	description: "My final project for Grade 11 Computer Science - a two-player Chess game built with Turing. One of the most difficult yet satisfying projects I have taken on. The final product was nearly fully functional - all but checkmate detection was working.",
	images: ["chess.jpg", "chess2.jpg", "chess3.jpg", "chess4.jpg"],
	type: "school",
	thumbnail: "chess.jpg",
	languages: ["Turing"]
}, {
	id: 10,
	title: "Geotab HR Automation System",
	description: "For the summer of 2017, I was a Jr. Software Developer Intern for the HR Department at Geotab. The goal of this project was to increase the efficiency of Geotab's HR Department by automating many tedious, time-consuming tasks. I created a collection of Docs, Forms, and Spreadsheets using Google Apps Script to automate many of the tasks, summarized below. As much of this is internal data, I cannot go into detail or include screenshots of the project itself for security purposes.<br><br>•  Job Applications<br>•  Interviews<br>•  Handling Employee Files<br>•  Scheduling Meetings<br>•  Emails<br>•  Internal Reporting<br>•  Resume Parsing<br>•  Workshop Registration<br>•  Performance Reviews<br>•  File Revision History",
	images: ["geotab.png"],
	type: "work",
	thumbnail: "geotab.png",
	languages: ["Google Apps Script"]
}, {
	id: 11,
	title: "ITEE Group Canada",
	description: "Freelance develoment work for a small local consulting firm, ITEE Group Canada. Created an infomational website dislaying information with an email contact form.",
	images: ["itee.png", "itee2.png"],
	type: "work",
	thumbnail: "thinktank.jpg",
	languages: ["HTML", "CSS", "JS", "jQuery", "PHP"]
}];
$(window).on("load", function () {
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
		if (num = $(e.currentTarget).attr("project"), document.location.href = "#modal", projectClicked = projects[num], window.history.pushState("", "", "/index.html?project=" + num),$(".remodal").empty(), toAppend = '<center><button data-remodal-action="close" class="remodal-close"></button>', toAppend += '<h1 style="font-size: 45px; font-family: Equal;">' + projectClicked.title + "</h1>", 0 != projectClicked.images.length) {
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
	}), $(".projectType").on("click", function (e) {
		$(".tab_content").remove();
		for (var t = $(e.currentTarget).attr("type"), a = 0; a < projects.length; a++) project = projects[a], project.type == t && (o = '<div class="tab_content"><div class="mdl-cell mdl-cell--4-col"><div project="' + project.id + '" class="mdl-card-square mdl-card">', o += '<img src="img/thumbnails/' + project.thumbnail + '" class="projectImg" alt="' + project.title + '">', o += "<center><figcaption>" + project.title + "</figcaption></center>", o += "</div></div></div>", $(".mdl-grid").append(o))
	}), $(document).scroll(function () {
		a()
	})
});
