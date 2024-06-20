// $('.padB').on("click", function() {
//   $(this).next(".displayNone").slideToggle();
// });

// $('#menu').on("click", function(e) {
//   e.preventDefault();
//   $('#siteMenu').css("right", "0")
//   $('#closeMenu').fadeIn();
// });


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
});


$(document).on("click touchstart", "#menu", function(e){
  e.preventDefault();
  $('#siteMenu').css("right", "0")
  $('#closeMenu').fadeIn();
});



// $('#closeMenu').on("click", function() {
//   $('#siteMenu').css("right", "-150vw")
//   $(this).fadeOut();
// });

$('body').on("click touchstart", "#closeMenu", function() {
  $('#siteMenu').css("right", "-150vw")
  $(this).fadeOut();
});


$('body').on("click touchstart", "a.closer", function() {
  $('#siteMenu').css("right", "-150vw")
  $('#closeMenu').fadeOut();
});




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


const menu = `
<header id="siteMenu" style="position: fixed; top: 0; right: -150vw; background: #fff; transition: .4s ease-out; overflow-y: scroll; z-index: 99; height: 100vh;">


<h2 style="margin-top: 3.5rem;">
FAH101: Monuments of Art History
</h2>
<ol class="grid2">
<li class="padB">
<a class="closer" href="index.html">
<h4>
Home
</h4>
</a>
</li>
<li class="padB">
<a class="closer" href="index.html#assignments">
<h4>
Assignments
</h4>
</a>
</li>
</ol>

<h3>
Jump to class
</h3>

<ol class="sched">
<li>
  <h3>
    <span>1</span>
    July 2
  </h3>
  <a href="1.1.html">
    <h4>
      Hello! And Meet the Teaching Team
    </h4>
  </a>
  <a href="1.2.html">
    <h4>
      Skills: Taking Notes in Art History
    </h4>
  </a>
  <a href="1.3.html">
    <h4>
      Monument: The Ajanta Caves
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
    <span>2</span>July 8
  </h3>
  <a href="#">
    <h4>
      Skills: Describing Art Objects and Analyzing Formal Elements
    </h4>
  </a>
  <a href="#">
    <h4>
      Monument: The Great Mosque of Damascus
    </h4>
  </a>
  <a href="#">
    <h4>
      Monuments: Qingming Festival and The Great Wave off Kanagawa
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
      Skills: Identifying and Evaluating Research Sources
    </h4>
  </a>
  <a href="#">
    <h4>
      Monuments: The Ghent Altarpiece and Altar de los Reyes
    </h4>
  </a>
  <a href="#">
    <h4>
      Monuments: Series of Eight Figures and Abaporú
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
      Skills: Comparing and Contrasting Art Objects
    </h4>
  </a>
  <a href="#">
    <h4>
      Monuments: Tā Moko and Māori Portraits 
    </h4>
  </a>
  <a href="#">
    <h4>
      Monuments: Painted Buffalo Robe and Ethiopia: Comparing and Contrasting Art Objects
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
      Monuments: Birthday and Creation of Birds
    </h4>
  </a>
  <a href="#">
    <h4>
      Monuments: Rebellious Silence and Paradise Camp
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
      Skills: Exploring Art History Methodologies for Further Studies
    </h4>
  </a>
  <a href="#">
    <h4>
      Monuments: End of Empire and Mama Ray
    </h4>
  </a>
  <a href="#">
    <h4>
      Monument: Art on view in Toronto
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
// flipcards

$('.flipCard').on("click", function() {
  $(this).children('.flip').css("transform", "rotateY(90deg)");
  $(this).children('.unFlip').css("transform", "rotateY(0deg)");
});

$('.TFbutton').on("click", function() {
  // $(this).fadeOut();
  $(this).next(".displayNone").slideToggle();
});

$('.transcriptButton').on("click", function() {
  $(this).next(".displayNone").slideToggle();
});



// definition boxes

$('.flowButton').on("click", function() {
  const factor = $(this).attr("id");
  $(this).parent().next(".mapBox").empty();
  for (let name in tabDescription) {
    if  (factor === name) {
      $(this).parent().next(".mapBox").append((tabDescription[name]));
      $(this).parent().next(".mapBox").slideDown(400);
    }
  }
});

$('.defs > i').on("click", function() {
  console.log('x');
  $(this).prev(".mapBox").slideUp(200);
});





// Modular Header

$( document ).ready(function() {
  $("nav").append(nav);

});

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
<a href="#schedule" tabindex="1" class="hide">
Schedule
</a>
</button>
<button id="menu">
<a href="" tabindex="1">
Site menu
</a>
</button>
`

const closeB = `
<button style="position: absolute; top: 1rem; right: 1rem; padding: 1rem; z-index: 100; display: none;" id="closeMenu">
Close
</button>`

