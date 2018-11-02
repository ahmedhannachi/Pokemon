import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RoutingModule} from "../routing/routing.module";
import {HttpClientModule} from "@angular/common/http";

import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "../../demo-data/in-memory-data.service";
import {FormsModule} from "@angular/forms";

import {PokemonsModule} from "../pokemons/pokemons.module";
import {LoginRoutingModule} from "./components/app/login-routing.module";

import {AppComponent} from "./components/app/app.component";
import {NotFoundComponent} from "./components/notfound/not-found.component";
import {LoginComponent} from "./components/login/login.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
        FormsModule,
        LoginRoutingModule,
        PokemonsModule,
        RoutingModule
    ],
    declarations: [
        AppComponent,
        NotFoundComponent,
        LoginComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}