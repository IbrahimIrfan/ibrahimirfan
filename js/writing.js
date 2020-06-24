window.onload = function () {
    populate_blog_list()
}

function populate_blog_list() {
    var blog_list = document.getElementById("blog-list-full");
    blog_data.forEach(blog => {
        blog_list.innerHTML += get_blog_card(
            blog.title,
            blog.image,
            blog.link,
            blog.desc
        );
    });
}