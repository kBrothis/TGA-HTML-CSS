// mainLink.addEventListener("click", textResize('mainLinkContent', 'mainLink'))
blogTopLink.addEventListener("click", textResize('blogTopContent', 'blogTopLink'))
blogBottomLink.addEventListener("click", textResize('blogBottomContent', 'blogBottomLink'))

function textResize(sectionId, linkId){
var articleText = document.getElementById(linkId + "Content");
var articleLen = length.articleText;
// set max length variables for each section
if (articleLen > articleLen / 2 + 1) {
    //  Reduce amount of text
    document.getElementById(sectionId).innerHtml = articleText(articleLen / 2);
    document.getElementById(linkId).innerHtml = <a id=linkId href='javascript:void(0);'>Read Less</a>
}
else {
    // increase amount of text
    document.getElementById(sectionId).innerHtml = articleText(articleLen);
    document.getElementById(linkId).innerHtml = <a id=linkId href='javascript:void(0);'>Read Less</a>
}
}
