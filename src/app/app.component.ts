import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'LP | Portfolio';
  showNav: boolean = false;
  navSticky: boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 160) {
      this.navSticky = true;
    } else {
      this.navSticky = false;
    }
  }
  navToggle(action: boolean): void {
    if (action === true) {
      this.showNav = true;
    } else {
      this.showNav = false;
    }
  }
  // nav cls when then nav link btn clicked
  navCls(action: boolean): void {
    if (this.showNav == true) {
      this.showNav = action;
    }
  }
}
