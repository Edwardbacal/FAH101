// home screen menus
$('body').on("click", ".padB", function() {
  $(this).next(".displayNone").slideToggle();
});

$('body').on("click touchstart", ".expander", function() {
  $(".displayNone").slideDown()
});

$('body').on("click touchstart", ".collapser", function() {
  $(".displayNone").slideUp()
});


// menu
$(document ).ready(function() {
  $("body").append(menu);
  $("body").append(closeB);
  $("#nav").append(nav);
});

$(document).on("click touchstart", "#menu", function(e){
  e.preventDefault();
  $('#siteMenu').css("right", "0")
  $('#closeMenu').fadeIn();
});

$('body').on("click touchstart", "a.closer", function() {
  $('#siteMenu').css("right", "-150vw")
  $('#closeMenu').fadeOut();
});

$('body').on("click touchstart", "#closeMenu", function() {
  $('#siteMenu').css("right", "-150vw")
  $(this).fadeOut();
});

$("a[href='#']").on("click", function(e) {
  e.preventDefault()
});

$("a[href='#']").click(function() {
  return false;
});



const menu = `
<header id="siteMenu" style="position: fixed; top: 0; right: -150vw; background: #fff; transition: .4s ease-out; overflow-y: scroll; z-index: 99; height: 100vh;">

<h2 style="margin-top: 3.5rem;">
FAH101: Monuments of Art History
</h2>
<ol class="grid2">
<li>
<a class="closer" href="index.html">
<h4>
Home
</h4>
</a>
</li>
<li>
<a class="closer" href="index.html#assignments">
<h4>
Assignments
</h4>
</a>
</li>
<li>
<a class="closer" href="https://q.utoronto.ca/courses/346676">
<h4>
Quercus
</h4>
</a>
</li>
</ol>

<h4>
Jump to class
</h4>

<ol class="sched">
<li>
<h3>
<span>1</span>
July 2
</h3>

<a href="1.1.html">
<h4>
1.1 Welcome / Skills: Thinking and working <em>Art Historically</em>
</h4>
</a>

<a href="#">
<h4>
1.2 Monument: The Ajanta Caves
</h4>
</a>

<div class="readings">
<h5>
Key dates
</h5>
<p>
<strong>
July 1:
</strong>
Civic holiday (university closed)
</p>
</div>
</li>

<li>
<h3>
<span>2</span>
July 8
</h3>

<a href="#">
<h4>
2.1 Skills: Describing art objects and analyzing formal elements
</h4>
</a>

<a href="#">
<h4>
2.2 Monument: The Great Mosque of Damascus
</h4>
</a>

<a href="#">
<h4>
2.3 Monument: Qingming Festival and The Great Wave off Kanagawa
</h4>
</a>

<a href="#">
<h4>
2.4 Monument: The Great Wave off Kanagawa
</h4>
</a>

<div class="readings">
<h5>
Key dates
</h5>
<p>
<strong>
July 8:
</strong>
Last day to enrol in S courses
</p>
<p>
<strong>
July 9:
</strong>
First day to select a Credit/No-Credit (CR/NCR) option for S courses
</p>
</div>
</li>

<li id="c3">
<h3>
<span>3</span>July 15
</h3>

<a href="#">
<h4>
3.1 Skills: Identifying and evaluating research sources
</h4>
</a>

<a href="#">
<h4>
3.2 Monument: The Ghent Altarpiece
</h4>
</a>

<a href="#">
<h4>
3.3 Monument: Altar de los Reyes
</h4>
</a>

<a href="#">
<h4>
3.4 Monument: Series of Eight Figures
</h4>
</a>

<a href="#">
<h4>
3.5 Monument: Abaporú
</h4>
</a>

<div class="readings">
<h5>
Key dates
</h5>
<p>
<strong>
July 21:
</strong>
Assignment 1: Sketch with formal analysis due
</p>
</div>
</li>

<li>
<h3>
<span>4</span>July 22
</h3>

<a href="#">
<h4>
4.1 Skills: Comparing and contrasting art objects
</h4>
</a>

<a href="#">
<h4>
4.2 Monuments: Tā Moko and Māori Portraits 
</h4>
</a>

<a href="#">
<h4>
4.3 Monument: Painted Buffalo Robe
</h4>
</a>


<a href="#">
<h4>
4.4 Monument: Ethiopia
</h4>
</a>
</li>


<li>
<h3>
<span>5</span>
July 29
</h3>

<a href="#">
<h4>
5.1 Monument: Birthday
</h4>
</a>

<a href="#">
<h4>
5.2 Monument: Creation of Birds
</h4>
</a>

<a href="#">
<h4>
5.3 Monument: Rebellious Silence
</h4>
</a>

<a href="#">
<h4>
5.4 Monument: Paradise Camp
</h4>
</a>

<div class="readings">
<h5>
Key dates
</h5>
<p>
<strong>
July 29:
</strong>
Last day to drop course
</p>
</div>
</li>

<li>
<h3>
<span>6</span>August 6
</h3>

<a href="#">
<h4>
6.1 Skills: Exploring Art History's methodologies
</h4>
</a>

<a href="#">
<h4>
6.2 Monument: End of Empire
</h4>
</a>

<a href="#">
<h4>
6.3 Monument: Mama Ray
</h4>
</a>

<a href="#">
<h4>
6.4 Monument: TBD!
</h4>
</a>

<div class="readings">
<h5>
Key dates
</h5>
<p>
<strong>
August 5:
</strong>
Civic holiday (university closed)
</p>
<p>
<strong>
August 12:
</strong>
Last day of classes
</p>
<p>
<strong>
August 13:
</strong>
Deadline to request Late Withdrawal (LWD) at College Registrar's Office <br>
Last day to add or remove a CR/NCR option in S and Y courses
</p>
<p>
<strong>
August 30:
</strong>
Last day to submit a petition in S and Y courses <br>
Last day for instructors to accept late term work without needing to submit a petition to the Faculty.
</p>
</div>
</li>
</ol>
`

const closeB = `
<button id="closeMenu" class="CTA">
X
</button>`













// $(".down").click(function() {
//   $('html, body').animate({
//     scrollTop: $(this).offset().top + 900
//   }, 400);
// });


$(window).on('scroll', function() {
  const y_scroll_pos = window.pageYOffset;
  const scroll_pos_test = 700;             // set to whatever you want it to be
  
  if(y_scroll_pos > scroll_pos_test) {
    $(".down").css("bottom", "1rem");
  }
  else {
    $(".down").css("bottom", "-2rem");
  }
});


$(".row li i").click(function() {
  $(this).parents("ul").animate({
    scrollLeft: "+=1000px"
  }, 400);
});



// flipcards

// $('.flipCard').on("click", function() {
//   $(this).children('.flip').css("transform", "rotateY(90deg)");
//   $(this).children('.unFlip').css("transform", "rotateY(0deg)");
// });

// $('.TFbutton').on("click", function() {
//   // $(this).fadeOut();
//   $(this).next(".displayNone").slideToggle();
// });

$('.transcriptButton').on("click", function() {
  $(this).next(".displayNone").slideToggle();
});



// definition boxes


$('.defs > i').on("click", function() {
  console.log('x');
  $(this).prev(".mapBox").slideUp(200);
});





// Modular Header
const nav = `
<button>
<a href="index.html">
Home
</a>
</button>
<button>
<a href="index.html#assignments" tabindex="1" class="hide">
Assignments
</a>
</button>
<button>
<a href="index.html#sched" tabindex="1" class="hide">
Schedule
</a>
</button>
<button id="menu">
<a href="" tabindex="1">
Site menu
</a>
</button>
`


