
document.addEventListener("DOMContentLoaded", function () {
    let scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click', function () {
      document.body.style.overflow = 'hidden';
      document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click', function () {
      document.body.style.overflow = 'visible';
      document.querySelector('#openModal').style.marginLeft = '0px';
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    let scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModall"]').addEventListener('click', function () {
      document.body.style.overflow = 'hidden';
      document.querySelector('#openModall').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#closee"]').addEventListener('click', function () {
      document.body.style.overflow = 'visible';
      document.querySelector('#openModall').style.marginLeft = '0px';
    });
  });


  let nav = $("#nav");
  let navToggle = $("#navToggle");

  navToggle.on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show");       /* При клике скрывает при повторном клике показывает */

});