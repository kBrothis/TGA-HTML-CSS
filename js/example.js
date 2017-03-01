this.readContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus justo nec auctor ultricies. Integer turpis mauris, sollicitudin eu rutrum non, mollis vel purus. Ut sed risus sit amet tellus maximus ultrices a in sem. Morbi ac ipsum egestas, efficitur risus eu, mattis nunc. Aenean porta bibendum magna tincidunt vestibulum. Mauris sed metus fringilla, porta odio vitae, imperdiet diam. Morbi quis mi at risus maximus tempus. Proin ut ornare est.";

function readMoreLessText(charLimit) {
    var readMoreLink = charLimit <= 200 ? " ... <a href='javascript:void(0);'onclick='readMoreLessText(400);'>Read More</a>" : " <a href='javascript:void(0);' onclick='readMoreLessText(200);'>Read less</a>";
    var readLessLink = this.readContent.substring(0, charLimit);
    document.getElementById("read-more").innerHTML = readLessLink + readMoreLink;
};
this.readMoreLessText(200);

this.readContent = "Proin sollicitudin rhoncus feugiat. Aliquam erat volutpat. In facilisis quis velit in finibus. Nullam metus nisi, fringilla at tempus vitae, faucibus porttitor libero. Quisque blandit augue sed diam viverra sollicitudin. Vivamus mollis ligula ipsum, at fermentum erat venenatis quis. Quisque dolor lectus, euismod a bibendum non, finibus in nulla. Donec in augue ac felis ultrices ullamcorper nullam.";
function readMoreLessText(charLimit) {
  var readMoreLink = charLimit <= 200 ? " ... <a href='javascript:void(0);'onclick='readMoreLessText(400);'>Read More</a>" : " <a href='javascript:void(0);' onclick='readMoreLessText(200);'>Read less</a>";
  var nLReadContent = this.readContent.substring(0, charLimit);
  document.getElementById("read-more2").innerHTML = nLReadContent + readMoreLink;
};
this.readMoreLessText(200);
