import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';
  button1 = 'Property binding';
  button2: string = ' Text Interpolation';
  fontSizePx = 16;
  getAlert(): void {
    alert('Alerta do Event Binding');
  }
}
