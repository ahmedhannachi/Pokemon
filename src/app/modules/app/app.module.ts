import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RoutingModule} from "../routing/routing.module";

import {PokemonsModule} from "../pokemons/pokemons.module";

import {AppComponent} from "./components/app/app.component";
import {NotFoundComponent} from "./components/notfound/not-found.component";

@NgModule({
    imports: [
        BrowserModule,
        PokemonsModule,
        RoutingModule
    ],
    declarations: [
        AppComponent,
        NotFoundComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}