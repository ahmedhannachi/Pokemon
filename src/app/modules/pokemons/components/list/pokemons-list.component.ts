import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {debounceTime, distinctUntilChanged, startWith, switchMap} from "rxjs/operators";
import {PokemonsService} from "../../pokemons.service";
import {Observable} from 'rxjs';
import {Subject} from "rxjs/Subject";

import {Pokemon} from "../../../../models/pokemon";

@Component({
    selector: 'list-pokemon-component',
    templateUrl: 'app/modules/pokemons/components/list/pokemons-list.component.html'
})
export class PokemonsListComponent implements OnInit {

    private searchTerms = new Subject<string>();
    pokemons$: Observable<Pokemon[]>;

    constructor(private router: Router, private PokemonsService: PokemonsService) {
    }

    ngOnInit(): void {
        this.pokemons$ = this.searchTerms.pipe(
            startWith(""),
            debounceTime(300),
            distinctUntilChanged(),
            switchMap((term: string) =>
                this.PokemonsService.searchPokemons(term)
            )
        );
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    selectPokemon(pokemon: Pokemon) {
        let link = ["/pokemons", pokemon.id];
        this.router.navigate(link);
    }
}