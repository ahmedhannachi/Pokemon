import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PokemonsService} from "../../pokemons.service";

import {Pokemon} from "../../../../models/pokemon";

@Component({
    selector: 'list-pokemon-component',
    templateUrl: 'app/modules/pokemons/components/list/pokemons-list.component.html'
})
export class PokemonsListComponent implements OnInit {

    private title: string = "List of pokemons";
    private pokemons: Pokemon[];

    constructor(private router: Router, private PokemonsService: PokemonsService) {
    }

    ngOnInit() {
        this.pokemons = this.PokemonsService.getPokemons();
    }

    selectPokemon(pokemon: Pokemon) {
        let link = ["/pokemons", pokemon.id];
        this.router.navigate(link);
    }
}