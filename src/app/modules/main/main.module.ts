import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RoutingModule} from "../routing/routing.module";

import {ListPokemonComponent} from './components/list/list-pokemon.component';
import {DetailsPokemonComponent} from "./components/details/details-pokemon.component";
import {MainComponent} from "./components/main/main.component";
import {NotFoundComponent} from "./components/notfound/not-found.component";

import {BorderCardDirective} from "./directives/border-card.directive";
import {PokemonTypeColorPipe} from "./pipes/pokemon-type-color.pipe";

@NgModule({
    imports: [
        BrowserModule,
        RoutingModule
    ],
    declarations: [
        MainComponent,
        ListPokemonComponent,
        DetailsPokemonComponent,
        NotFoundComponent,
        BorderCardDirective,
        PokemonTypeColorPipe
    ],
    bootstrap: [
        MainComponent
    ]
})
export class MainModule {
}