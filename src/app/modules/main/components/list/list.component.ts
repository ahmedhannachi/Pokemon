import {Component, OnInit} from '@angular/core';

import {Pokemon} from "../../../../models/pokemon";
import {POKEMONS} from "../../../../demo-data/mock-pokemons";

@Component({
    selector: 'main-component',
    templateUrl: 'app/modules/main/components/list/list.component.html',
})
export class ListComponent implements OnInit {

    private title:string = "List of pokemons";
    private pokemons: Pokemon[] = null;

    ngOnInit() {
        this.pokemons = POKEMONS;
    }

    selectPokemon(pokemon: Pokemon) {
        console.log('Vous avez selectionné ' + pokemon.name);
    }
}