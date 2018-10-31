import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PokemonsListComponent} from "./components/list/pokemons-list.component";
import {PokemonsDetailComponent} from "./components/details/pokemons-detail.component";

const appRoutes: Routes = [
    {path: 'pokemons', component: PokemonsListComponent},
    {path: 'pokemons/:id', component: PokemonsDetailComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonsRoutingModule {
}