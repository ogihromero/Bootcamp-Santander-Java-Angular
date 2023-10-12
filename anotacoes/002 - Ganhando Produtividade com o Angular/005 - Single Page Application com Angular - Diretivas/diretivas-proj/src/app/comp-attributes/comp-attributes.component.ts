import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-attributes',
  templateUrl: './comp-attributes.component.html',
  styleUrls: ['./comp-attributes.component.css'],
})
export class CompAttributesComponent implements OnInit {
  styleClass: string = 'enable';
  bgCustomColor: string = 'red';
  CustomColor: string = 'white';
  item: string = '';
  list: string[] = [];
  isEnabledBlock: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  addItem() {
    this.list.push(this.item);
    this.item = '';
  }

  changeClass() {
    this.styleClass = this.styleClass === 'enable' ? 'disable' : 'enable';
  }
}
