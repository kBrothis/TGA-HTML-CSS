


$(document).ready(function(){
    $("#myCarousel").carousel();

    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarousel").carousel(3);
    });

    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
});


function showMore(id){
    document.getElementById(id+'Overflow').className='';
    document.getElementById(id+'MoreLink').className='hidden';
    document.getElementById(id+'LessLink').className='';
}

function showLess(id){
    document.getElementById(id+'Overflow').className='hidden';
    document.getElementById(id+'MoreLink').className='';
    document.getElementById(id+'LessLink').className='hidden';
}

var len = 200;
var shrinkables = document.getElementsByClassName('shrinkable');
if (shrinkables.length > 0) {
    for (var i = 0; i < shrinkables.length; i++){
        var fullText = shrinkables[i].innerHTML;
        if(fullText.length > len){
            var trunc = fullText.substring(0, len).replace(/\w+$/, '');
            var remainder = "";
            var id = shrinkables[i].id;
            remainder = fullText.substring(len, fullText.length);
            shrinkables[i].innerHTML = '<span>' + trunc + '<span class="hidden" id="' + id + 'Overflow">'+ remainder +'</span></span>&nbsp;<a id="' + id + 'MoreLink" href="#!" onclick="showMore(\''+ id + '\');">Read More</a><a class="hidden" href="#!" id="' + id + 'LessLink" onclick="showLess(\''+ id + '\');">Show Less</a>';
        };
    };
};
