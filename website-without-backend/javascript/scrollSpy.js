$(document).ready(function() {

    // Scroll spy
    jQuery('body').scrollspy({
        target: "#main-nav"
    });

    // Navbar fade
    changeNavbar();

    $(window).scroll(function() {
        changeNavbar();
    });

    function changeNavbar() {
        var navbar = $("#main-nav");
        if ($(this).scrollTop() >= 100) {
            navbar.addClass("bg-light").removeClass("bg-transparent");
        } else if ($(this).scrollTop() < 100) {
            navbar.removeClass("bg-light").addClass("bg-transparent");
        }
    }
});