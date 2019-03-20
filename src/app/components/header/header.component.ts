import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    /***************** Nav Transformicon ******************/

    /* When user clicks the Icon */
    $(".nav-toggle").click(function () {
      $(this).toggleClass("active");
      $(".overlay-boxify").toggleClass("open");
    });

    /* When user clicks a link */
    $(".overlay ul li a").click(function () {
      $(".nav-toggle").toggleClass("active");
      $(".overlay-boxify").toggleClass("open");
    });

    /* When user clicks outside */
    $(".overlay").click(function () {
      $(".nav-toggle").toggleClass("active");
      $(".overlay-boxify").toggleClass("open");
    });
    // Stick the header at top on scroll
    $(document).ready(function () {
      $("#mainNav").sticky({ topSpacing: 0, zIndex: '50' });
    });

    //Scroll Top link
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scrolltop').fadeIn();
      } else {
        $('.scrolltop').fadeOut();
      }
    });

    $('.scrolltop, #logo a, #up').click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 1000, 'easeInOutExpo');
      return false;
    });
    //Modal
  }


}
