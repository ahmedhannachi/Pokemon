import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {Pokemon} from "../../models/pokemon";
import {POKEMONS} from "../../demo-data/mock-pokemons";
import {of} from "rxjs/observable/of";

@Injectable()
export class PokemonsService {

    private pokemonsApiUrl = 'api/pokemons';

    constructor(private http: HttpClient) {
    }

    private log(log: string) {
        console.info(log);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        }
    }

    getPokemons(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(this.pokemonsApiUrl).pipe(
            tap(_ => this.log('fetched pokemons')),
            catchError(this.handleError('getPokemons', []))
        );
    }

    getPokemon(id: number): Observable<Pokemon> {
        const url = `${this.pokemonsApiUrl}/${id}`;

        return this.http.get<Pokemon>(url).pipe(
            tap(_ => this.log(`fetched pokemon id${id}`)),
            catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
        );
    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = {
          headers: new HttpHeaders({'Content-Type': 'application/json'})
        };

        return this.http.put(this.pokemonsApiUrl, pokemon, httpOptions).pipe(
            tap(_=>this.log(`updated pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('updatePokemon'))
        );
    }

    deletePokemon(pokemon: Pokemon){
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };

        return this.http.delete(this.pokemonsApiUrl+"/"+pokemon.id, httpOptions).pipe(
            tap(_=>this.log(`delete pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('deletePokemon'))
        );
    }

    getPokemonTypes(): string[] {
        return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol'];
    }

}