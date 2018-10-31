import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {Pokemon} from "../../../../models/pokemon";
import {POKEMONS} from "../../../../demo-data/mock-pokemons";

@Component({
    selector: 'list-pokemon-component',
    templateUrl: 'app/modules/pokemons/components/list/pokemons-list.component.html',
})
export class PokemonsListComponent implements OnInit {

    private title:string = "List of pokemons";
    private pokemons: Pokemon[] = null;

    constructor(private router: Router){}

    ngOnInit() {
        this.pokemons = POKEMONS;
    }

    selectPokemon(pokemon: Pokemon) {
        console.log('Vous avez selectionné ' + pokemon.name);
        let link = ["/pokemons", pokemon.id];
        this.router.navigate(link);
    }
}