import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {Pokemon} from "../../../../models/pokemon";
import {POKEMONS} from "../../../../demo-data/mock-pokemons";

@Component({
    selector: 'list-pokemon-component',
    templateUrl: 'app/modules/main/components/list/list-pokemon.component.html',
})
export class ListPokemonComponent implements OnInit {

    private title:string = "List of pokemons";
    private pokemons: Pokemon[] = null;

    constructor(private router: Router){}

    ngOnInit() {
        this.pokemons = POKEMONS;
    }

    selectPokemon(pokemon: Pokemon) {
        console.log('Vous avez selectionné ' + pokemon.name);
        let link = ["/pokemon", pokemon.id];
        this.router.navigate(link);
    }
}