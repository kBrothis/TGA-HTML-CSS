// eample.js
// <script language="JavaScript">

// document.getElementById("contact-section");
// onclick=document.getElementById("demo").innerHTML;
//
//
// var mainFullString = "Here are a few of the contestants from Sparkfuns AVC (Autonomous Vehicle Challenge) from a couple of years ago. The event is pretty well run, interesting and fun to watch. The people who enter the contest are pretty imaginative and creative. There were UFOs, vehicles with a variety of humorous attachments (like the caterpiller to the left), balancing robots and some that defy description. There was even a full size SUV that managed to traverse the course with no one driving it.";
// var mainShortString = str.substring(1, 4);
//
// fieldNameElement.innerHTML = "mainShortString";

$(document).ready(function() {
	var showChar = 200;
	var ellipsestext = "...";
	var moretext = "more";
	var lesstext = "less";
	$('.more').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);

			var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

			$(this).html(html);
		}

	});

	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
	});
});
// classexample
//  var content = document.getElementById(comment).innerHTML; // get HTML content for the given element
// this.readContent = "Here are a few of the contestants from the Sparkfun AVC (Autonomous Vehicle Challenge) from a couple of years ago. The event is pretty well run, interesting and fun to watch. The people who enter the contest are pretty imaginative and creative. There were UFOs, vehicles with a variety of humorous attachments (like the caterpiller to the left), balancing robots and some that defy description. There was even a full size SUV that managed to traverse the course with no one driving it.";
//
// function readMoreLessText(charLimit) {
//  var readMoreLink = charLimit < 200 ? "<a href='javascript:void(0);' onclick='readMoreLessText(400);'>Read More</a>";
//  content.substring(0, charLimit);
//  document.getElementById("read-more-main").innerHtml = content + readMorelink;
// };
//
// this.readMoreLessText(200);
//
// }
//
// (function initOnPageLoad() {
//  var readContent = "hsdjkfh sjfhjks dhfkjasdhf kjasfkjfkjsdkjasdhf kjasdhf kajsfksdjfadsfkjsahfd ajksdfkjds";
//  var readMoreLink = "<a href='javascript:void(0);' onclick='onClickEvent();'>Read More</a>";
//  readContent.substring(0, 200);
//  document.getElementById("read-more-blog-1").innerHtml = readContent + readMorelink;
// })();
