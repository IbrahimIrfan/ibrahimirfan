blog_data = [
    {
        "title": "The Complete Guide to Big O Notation",
        "image": "img/big-o.jpg",
        "link": "big-o",
        "desc": "Everything you need to know about Big O Notation."
    },
    {
        "title": "The Wonderfully Weird World of Freelancing",
        "image": "img/freelance.jpeg",
        "link": "the-wonderfully-weird-world-of-freelancing",
        "desc": "Recalling my unconventional freelance experiences, including close calls with tax fraud, the next Uber, and the adult film industry"
    },
    {
        "title": "How to Build a Palm Vein Authentication System",
        "image": "img/palm.png",
        "link": "palm-vein-authentication",
        "desc": "Learn how to build a cheap palm vein authentication system with a Raspberry Pi."
    },
    {
        "title": "First Year in Waterloo Engineering",
        "image": "img/uw.jpeg",
        "link": "first-year-in-waterloo-engineerin",
        "desc": "Reflections at the 1 year mark."
    },
];

function get_blog_card(title, image, link, desc) {
    var blog_card =
    `<div class="card blog-preview">
        <div class="card-body row">
            <img class="blog-img" src="${image}" alt="${title}">
            <div class="blog-details">
                <h5 class="card-title blog-title">
                    ${title}
                </h5>
                <h6 class="card-subtitle mb-2 text-muted blog-subtitle">
                    ${desc}
                </h6>
                <a href="blog/${link}" class="card-link">
                    Read More
                </a>
            </div>
        </div>
    </div>`;
    return blog_card
}