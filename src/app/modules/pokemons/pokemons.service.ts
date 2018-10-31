import {Injectable} from "@angular/core";
import {Pokemon} from "../../models/pokemon";
import {POKEMONS} from "../../demo-data/mock-pokemons";

@Injectable()
export class PokemonsService {

    getPokemons(): Pokemon[] {
        return POKEMONS;
    }

    getPokemon(id: number): Pokemon {
        let pokemons = this.getPokemons();

        for (let i = 0; i < pokemons.length; i++) {
            if (id === pokemons[i].id) {
                return pokemons[i];
            }
        }
    }

}