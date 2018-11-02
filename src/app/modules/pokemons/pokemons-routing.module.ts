import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PokemonsListComponent} from "./components/list/pokemons-list.component";
import {PokemonsDetailComponent} from "./components/details/pokemons-detail.component";
import {EditPokemonComponent} from "./components/edit/pokemon-edit.component";
import {AuthGuardService} from "../app/guards/auth-guard.service";

const appRoutes: Routes = [
    {
        path: 'pokemons',
        canActivate: [AuthGuardService],
        children:[
            {path: '', component: PokemonsListComponent},
            {path: ':id/edit', component: EditPokemonComponent},
            {path: ':id', component: PokemonsDetailComponent}
        ]
    }
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