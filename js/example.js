function readMoreClick() {
    ///Fired when clicked
    alert('Test')
}

(function initOnPageLoad() {
    var articleBlogs = [];
    articleBlogs[0] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis ornare metus. " +
        "Donec posuere massa eget urna gravida hendrerit. Mauris et est nulla. Nunc placerat mattis velit " +
        "a sodales. Suspendisse suscipit in massa non ullamcorper. Nam hendrerit ex ac bibendum posuere. " +
        "Nam id iaculis nulla, ac luctus velit. Orci varius natoque penatibus et magnis dis parturient montes, " +
        "nascetur ridiculus mus. Mauris hendrerit ex sed condimentum ullamcorper. Interdum et malesuada fames " +
        "ac ante ipsum primis in faucibus. Aliquam viverra maximus massa, nec fermentum sapien sollicitudin vel. " +
        "Cras viverra diam eu odio accumsan, vel porttitor mauris rutrum. Aenean pulvinar in risus consectetur " +
        "auctor.  Mauris lacinia justo pharetra, accumsan quam eget, varius velit. Curabitur vel elementum elit. " +
        "Duis volutpat.";
    articleBlogs[1] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis ornare metus. " +
        "Donec posuere massa eget urna gravida hendrerit. Mauris et est nulla. Nunc placerat mattis velit " +
        "a sodales. Suspendisse suscipit in massa non ullamcorper. Nam hendrerit ex ac bibendum posuere. " +
        "Nam id iaculis nulla, ac luctus velit. Orci varius natoque penatibus et magnis dis parturient montes, " +
        "nascetur ridiculus mus. Mauris hendrerit ex sed condimentum ullamcorper. Interdum et malesuada fames " +
        "ac ante ipsum primis in faucibus. Aliquam viverra maximus massa, nec fermentum sapien sollicitudin vel. " +
        "Cras viverra diam eu odio accumsan, vel porttitor mauris rutrum. Aenean pulvinar in risus consectetur " +
        "auctor.  Mauris lacinia justo pharetra, accumsan quam eget, varius velit. Curabitur vel elementum elit. " +
        "Duis volutpat.";
    var readMoreLink = "<a href='javascript:void(0);' onclick='onClickEvent();'>Read More</a>";
    readContent.substring(0, 200);
    document.getElementById("read-more-blog-1").innerHtml = readContent + readMorelink;
})();
