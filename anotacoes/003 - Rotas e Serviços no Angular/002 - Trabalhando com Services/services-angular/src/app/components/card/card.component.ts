import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  pokemon: PokemonData = {
    id: 0,
    name: 'bulbasaur',
    sprites: {
      front_default: '',
    },
    types: [
      {
        type: {
          name: '',
        },
      },
    ],
  };
  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.getPokemon('bulbasaur');
  }

  getPokemon(pokemonName: string): void {
    this.service.getPokemon(pokemonName).subscribe({
      next: (data) => {
        this.pokemon = {
          id: data.id,
          name: data.name,
          types: data.types,
          sprites: data.sprites,
        };
      },
      error: (err) => {
        console.log('not found');
      },
    });
  }
}
