import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'bsds-ui';

  skipToMain() {
    event.preventDefault();
    location.hash='mainContent';
  }
}