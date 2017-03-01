var data = '{ "0" : "0 fasdf d gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaffasdfd gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaffasdfd gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaffasdfd gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaffasdfd gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaf", "1" : "1 fasdf d gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaffasdfd gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaffasdfd gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaffasdfd gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaffasdfd gda ad gda ggd gaga gagakd jad jaajkgkla jga kjkajgk jk ga gkla jkgakgjafkgafga kgja gajkgkagl ajgjglaj gkjagkjakjgaf" }';

var status = "less";
function toggleText(textAreaId, buttonId, textIndex) {

    var json = JSON.parse(data);
    var text = json[textIndex];
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

// (function () {
//     var getElement = document.getElementById("textArea");
//     getElement.innerText = this.blog1Text;
//     return false;
//  })();