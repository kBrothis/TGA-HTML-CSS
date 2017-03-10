// var heroContent = '<p class="text-muted">Irony hashtag woke hoodie echo park +1, 8-bit la croix af sartorial vegan quinoa swag schlitz tbh. Brooklyn +1 tacos , air plant viral hammock tbh try-hard VHS green juice raw denim church-key post-ironic. Vinyl mlkshk live-edge, fashion axe forage banh mi  echo park stumptown health goth kombucha lyft listicle. Art party gastropub vegan kombucha, everyday carry hell of dreamcatcher iPhone cred single-origin coffee YOLO. Small batch celiac typewriter, put a bird on it microdosing gentrify tousled blue bottle. Fanny pack raw denim migas hot chicken, la croix selfies +1 williamsburg cliche lyft. Chillwave biodiesel single-origin coffee cornhole. Mumblecore hell of pabst, forage disrupt kombucha readymade tumeric. Authentic photo booth lo-fi pug. Kitsch keytar keffiyeh copper mug normcore street art neutra, church-key la croix portland mixtape retro meggings. Bespoke beard neutra, pok pok irony next level sustainable fashion axe artisan occupy umami PBR&B mumblecore truffaut mlkshk. La croix gochujang jianbing, air plant photo booth roof party crucifix live-edge glossier art party banh mi poke chillwave narwhal pour-over.</p>',
// article = document.getElementById('hero');
//
// article.insertAdjacentHTML('beforebegin', heroContent);
/////////////////
// test function: When "Read More" is clicked, "read more" is replaced with "You Clicked Me"
// function toggleReadMore(){
//   document.getElementById("hero").innerHTML = heroContent;
// }


this.heroContent = "Irony hashtag woke hoodie echo park +1, 8-bit la croix af sartorial vegan quinoa swag schlitz tbh. Brooklyn +1 tacos , air plant viral hammock tbh try-hard VHS green juice raw denim church-key post-ironic. Vinyl mlkshk live-edge, fashion axe forage banh mi  echo park stumptown health goth kombucha lyft listicle. Art party gastropub vegan kombucha, everyday carry hell of dreamcatcher iPhone cred coffee YOLO.";

function readMoreLessText(charLimit) {
  var readMoreLink = charLimit <= 200 ? " ... <br/><br/><a href='javascript:void(0);' onclick='readMoreLessText(410);'>Show More</a>" : "<br/><br/><a href='javascript:void(0);' onclick='readMoreLessText(200);'>Show less</a>";
  var textBlock = this.heroContent.substring(0, charLimit);
  document.getElementById("read-more-hero").innerHTML = textBlock + readMoreLink;
};

this.readMoreLessText(200);


// when read more is clicked, hide "read more" text
// then show 400 characters of article
// display "show less" text
// when "show less" is clicked, toggle back to original state
