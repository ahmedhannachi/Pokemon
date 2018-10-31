import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

// ROUTING
import {PokemonsRoutingModule} from "./pokemons-routing.module";

// COMPONENTS
import {PokemonsListComponent} from './components/list/pokemons-list.component';
import {PokemonsDetailComponent} from "./components/details/pokemons-detail.component";

// DIRECTIVES
import {BorderCardDirective} from "./directives/border-card.directive";

// PIPES
import {PokemonTypeColorPipe} from "./pipes/pokemon-type-color.pipe";

@NgModule({
    imports: [
        CommonModule,
        PokemonsRoutingModule
    ],
    declarations: [
        PokemonsListComponent,
        PokemonsDetailComponent,
        BorderCardDirective,
        PokemonTypeColorPipe
    ]
})
export class PokemonsModule {
}