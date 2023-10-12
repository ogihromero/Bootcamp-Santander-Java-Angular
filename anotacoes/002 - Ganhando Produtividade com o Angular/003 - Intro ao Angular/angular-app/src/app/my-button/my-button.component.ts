import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
})
export class MyButtonComponent implements OnInit {
  @Input() buttonText: string = 'Default Text';
  constructor() {}

  ngOnInit(): void {}
}
