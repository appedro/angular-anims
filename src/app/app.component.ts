import { Component } from '@angular/core';
import { fader } from './shared/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    fader
  ]
})
export class AppComponent {
  title = 'anims';
}
