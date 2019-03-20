import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {

      /***************** Waypoints ******************/
    
      $('.wp1').waypoint(function() {
        $('.wp1').addClass('animated fadeInLeft');
      }, {
        offset: '75%'
      });
      $('.wp2').waypoint(function() {
        $('.wp2').addClass('animated fadeInDown');
      }, {
        offset: '75%'
      });
      $('.wp3').waypoint(function() {
        $('.wp3').addClass('animated bounceInDown');
      }, {
        offset: '75%'
      });
      $('.wp4').waypoint(function() {
        $('.wp4').addClass('animated fadeInDown');
      }, {
        offset: '75%'
      });
    
      /***************** Flickity(Carrousel responsive) ******************/
    
      $('#featuresSlider').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false
      });
    
      $('#showcaseSlider').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        imagesLoaded: true
      });
    
      /***************** Fancybox ******************/
    
      $(".youtube-media").on("click", function(e) {
        var jWindow = $(window).width();
        if (jWindow <= 768) {
          return;
        }
        $.fancybox({
          href: this.href,
          padding: 4,
          type: "iframe"
          // 'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
        });
        return false;
      });
    
      //Link de anclaje
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 2000);
            
            return false;
          }
        }
      });
    
      $("a.single_image").fancybox({
        padding: 4,
      });
    
    });
  }

}
