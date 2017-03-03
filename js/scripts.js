var data = '{ "slideshowText" : "slide fasdf d gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaffasdfd gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaffasdfd gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaffasdfd gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaffasdfd gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaf", "newsletterText" : "newsletter fasdf d gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaffasdfd gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaffasdfd gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaffasdfd gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaffasdfd gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaf" }';

var status = "less";
function toggleText(textAreaId, buttonId) {

    var json = JSON.parse(data);
    var text = json[textAreaId];
    var getElement = document.getElementById(textAreaId);
    var getBtn = document.getElementById(buttonId);

    if (status == "less") {
        getElement.innerHTML = text;
        getBtn.innerText = "See Less";
        status = "more";
    } else if (status == "more") {
        getElement.innerHTML = text.substring(0, 200) + "...";
        getBtn.innerText = "See More";
        status = "less"
    }
}

(function initText() {
    var json = JSON.parse(data);
    var text = json["slideshowText"];
    document.getElementById("slideshowText").innerHTML = text.substring(0, 200) + "...";

    text = json["newsletterText"];
    document.getElementById("newsletterText").innerHTML = text.substring(0, 200) + "...";
})();