import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

// ROUTING
import {PokemonsRoutingModule} from "./pokemons-routing.module";
// COMPONENTS
import {PokemonsListComponent} from './components/list/pokemons-list.component';
import {PokemonsDetailComponent} from "./components/details/pokemons-detail.component";
import {EditPokemonComponent} from "./components/edit/pokemon-edit.component";
import {PokemonFormComponent} from "./forms/pokemon/pokemon-form.component";
import {LoaderComponent} from "../app/components/loader.component";
// DIRECTIVES
import {BorderCardDirective} from "./directives/border-card.directive";
// PIPES
import {PokemonTypeColorPipe} from "./pipes/pokemon-type-color.pipe";
// SERVICES
import {PokemonsService} from "./pokemons.service";
import {AuthGuardService} from "../app/guards/auth-guard.service";
import {AuthService} from "../app/auth.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PokemonsRoutingModule
    ],
    declarations: [
        PokemonsListComponent,
        PokemonsDetailComponent,
        EditPokemonComponent,
        PokemonFormComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        LoaderComponent
    ],
    providers: [
        PokemonsService,
        AuthGuardService,
        AuthService
    ]
})
export class PokemonsModule {
}