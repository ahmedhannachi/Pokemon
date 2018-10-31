import {NgModule}              from '@angular/core';
import {RouterModule,Routes}  from '@angular/router';
import {NotFoundComponent} from "../app/components/notfound/not-found.component";

const appRoutes: Routes = [
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