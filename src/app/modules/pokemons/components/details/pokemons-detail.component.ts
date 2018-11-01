import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {Pokemon} from "../../../../models/pokemon";
import {PokemonsService} from "../../pokemons.service";

@Component({
    selector: 'detail-pokemon',
    templateUrl: 'app/modules/pokemons/components/details/pokemons-detail.component.html'
})
export class PokemonsDetailComponent implements OnInit {

    pokemon: Pokemon = null;

    constructor(private route: ActivatedRoute, private router: Router, private PokemonsService: PokemonsService) {
    }

    ngOnInit(): void {
        let id = +this.route.snapshot.paramMap.get('id');
        this.PokemonsService.getPokemon(id).subscribe(pokemon=>this.pokemon=pokemon);
    }

    goBack(): void {
        this.router.navigate(['/pokemons']);
    }

    goEdit(id: number): void {
        this.router.navigate(['/pokemons/pokemon', id]);
    }

    delete(pokemon: Pokemon): void {
        this.PokemonsService.deletePokemon(pokemon).subscribe(()=>this.goBack());
    }

}