window.addEventListener("load", function () {
    populate_blog_list()
});

function populate_blog_list() {
    var blog_list = document.getElementById("blog-list-partial");
    for (var i = 0; i < 3; i++) {
        var blog = blog_data[i];
        blog_list.innerHTML += get_blog_card(
            blog.title,
            blog.image,
            blog.link,
            blog.desc
        );
    }
}