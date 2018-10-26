import {NgModule}              from '@angular/core';
import {RouterModule,Routes}  from '@angular/router';
import {ListPokemonComponent} from "../main/components/list/list-pokemon.component";
import {DetailsPokemonComponent} from "../main/components/details/details-pokemon.component";
import {NotFoundComponent} from "../main/components/notfound/not-found.component";

const appRoutes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailsPokemonComponent },
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule { }