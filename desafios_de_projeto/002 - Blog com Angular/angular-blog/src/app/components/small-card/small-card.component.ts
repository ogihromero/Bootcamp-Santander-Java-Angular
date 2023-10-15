import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  // @Input()
  // link: string = '#';
  @Input()
  coverImage: string = '';
  @Input()
  title: string = '';
  @Input()
  id: string = '1';

  constructor() {}

  ngOnInit(): void {}
}
