import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'LP | Portfolio';
  navToggle(action: boolean): void {
    if (action === true) {
      alert('hi');
    } else {
      alert('bye');
    }
  }
}
