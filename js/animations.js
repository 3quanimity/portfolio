// ----------------------------JS from Youtube Vid------------------------------------------

// const navbar = document.querySelector("#nav-menu");

// const about = document.querySelector("#about-me");
// const projects = document.querySelector("#projects-target");
// const contact = document.querySelector("#contact-target");

// // const sectionOneOptions = { rootMargin: "-200px 0px 0px 0px" };
// var options = {
//   root: document.querySelector("#scrollArea"),
//   rootMargin: "0px",
//   threshold: 1.0
// };
// const SectionOneObserver = new IntersectionObserver(function(entries, options) {
//   console.log(entries);
//   // entries.forEach(entry => {
//   //   if (entry.isIntersecting) {
//   //     console.log(entry.target);
//   //   }
//   // });
// });

// SectionOneObserver.observe(about);
// SectionOneObserver.observe(projects);
// SectionOneObserver.observe(contact);

// ----------------------------JS translated from Jquery (with Jobran)------------------------------------------

// var sections = Array.from(document.querySelector("#scrollArea").children),
//   nav = Array.from(document.querySelector("#nav-menu")),
//   nav_height = nav.offsetHeight;

// window.addEventListener("load", function() {
//   var cur_pos = this.scrollY;

//   sections.forEach(el => {
//     var top = this.pageYOffset - nav_height,
//       bottom = top + el.offsetHeight;
//     console.log(nav_height, top, bottom);
//     if (cur_pos >= top && cur_pos <= bottom) {
//       nav.find(el =>
//         el.classList.contains("active").classList.remove("active")
//       );
//       //  sections.removeClass("active");

//       this.addClass("active");
//       // nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
//     }
//   });
// });

// --------------------------------Jquery (with Amine)--------------------------------------

// var sections = $("#scrollArea"),
//   nav = $("nav"),
//   nav_height = nav.outerHeight();

// $(window).on("scroll", function() {
//   var cur_pos = $(this).scrollTop();

//   sections.each(function() {
//     var top = $(this).offset().top - nav_height,
//       bottom = top + $(this).outerHeight();

//     if (cur_pos >= top && cur_pos <= bottom) {
//       nav.find("a").removeClass("active");
//       sections.removeClass("active");

//       $(this).addClass("active");
//       nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
//     }
//   });
// });

// --------------------------------JS stack Overflow (with Sarra) in process--------------------------------------
function onScrollHandle() {
  //Navbar shrink when scroll down
  // $(".navbar-default").toggleClass("navbar-shrink", $(this).scrollTop() > 50);
  //Get current scroll position
  console.log("zommara");
  var currentScrollPos = $(document).scrollTop();
  //Iterate through all node
  Array.from($("#nav-menu > a")).forEach(el => {
    // el.addEventListener("onmouseenter", function() {
    console.log(el);
    console.log(el.href);
    var curLink = $(this);
    var refElem = $(curLink.attr("href"));
    console.log(curLink);
    console.log(refElem);
    //   //Compare the value of current position and the every section position in each scroll
    //   if (
    //     refElem.position().top <= currentScrollPos &&
    //     refElem.position().top + refElem.height() > currentScrollPos
    //   ) {
    //     //Remove class active in all nav
    //     Array.from($("#nav-menu > a")).removeClass("active");
    //     //Add class active
    //     curLink.parent().addClass("active");
    //   } else {
    //     curLink.parent().removeClass("active");
    //   }
    // })
    // })
  });
}

onScrollHandle();
