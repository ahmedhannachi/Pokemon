import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RoutingModule} from "../routing/routing.module";
import {HttpClientModule} from "@angular/common/http";

import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "../../demo-data/in-memory-data.service";

import {PokemonsModule} from "../pokemons/pokemons.module";

import {AppComponent} from "./components/app/app.component";
import {NotFoundComponent} from "./components/notfound/not-found.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
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