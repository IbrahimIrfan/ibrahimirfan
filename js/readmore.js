window.addEventListener("load", function () {
    add_read_more()
});

function add_read_more() {
    blog_list_html = "";
    blog_data.forEach(blog => {
        blog_list_html += get_blog_link(
            blog.title,
            blog.link,
        );
    });

    read_more = document.createElement("div")
    read_more.classList.add("readmore-wrapper")
    read_more_html =
        "<div class='readmore-title'> Read More </div>" +
        "<ul class='readmore-list'>" +
        blog_list_html +
        "</ul>" +
        "</div>";

    read_more.innerHTML = read_more_html;
    document.body.insertBefore(read_more,
        document.getElementsByClassName("signature")[0].nextSibling)
}

function get_blog_link(title, link) {
    current = document.title;
    if (title == current){
        return "";
    }
    return "<li>" +
        "<a href='" + link + "'>" + title + "</a>" +
        "</li>";
}