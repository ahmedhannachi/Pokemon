import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ListComponent }  from './components/list/list.component';

import {BorderCardDirective} from "./directives/border-card.directive";
import {PokemonTypeColorPipe} from "./pipes/pokemon-type-color.pipe";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ ListComponent,BorderCardDirective,PokemonTypeColorPipe ],
    bootstrap:    [ ListComponent ]
})
export class MainModule { }