import {Component, OnInit} from '@angular/core';

import {Pokemon} from "../../models/pokemon";
import {POKEMONS} from "../../demo/mock-pokemons";

@Component({
    selector: 'main-component',
    templateUrl: './app/modules/main/main.component.html',
})
export class MainComponent implements OnInit {

    pokemons: Pokemon[] = null;

    ngOnInit() {
        this.pokemons = POKEMONS;
    }

    selectPokemon(pokemon: Pokemon) {
        console.log('Vous avez selectionné ' + pokemon.name);
    }

}