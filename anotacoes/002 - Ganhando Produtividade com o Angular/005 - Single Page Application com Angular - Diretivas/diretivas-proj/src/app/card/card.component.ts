import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  produtos: string[] = [];
  menuType: string = '';
  constructor() {
    this.produtos = ['mouse', 'teclado', 'monitor', 'gabinete'];
  }

  addProduct(): void {
    this.produtos.push('novo produto adicionado');
  }

  removeProduct(index: number): void {
    this.produtos.splice(index, 1);
  }

  popProduct(): void {
    this.produtos.pop();
  }

  ngOnInit(): void {}
}
