import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from '../../services/user.service';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [UserService]
})
export class NavbarComponent implements OnInit {
  public session;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 56
    });
    // Collapse Navbar
    var navbarCollapse = function () {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    $(window).scroll(navbarCollapse);
  }

  ngDoCheck(){
    this.session = this._userService.getSession();
  }

  logout(){
    localStorage.clear();
    this.session = null;
  }

}
