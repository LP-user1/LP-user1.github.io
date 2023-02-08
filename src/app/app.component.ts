import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'LP | Portfolio';
  showNav: boolean = false;
  navToggle(action: boolean): void {
    if (action === true) {
      this.showNav = true;
    } else {
      this.showNav = false;
    }
  }
}
