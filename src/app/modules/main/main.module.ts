import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent }  from './main.component';

import {BorderCardDirective} from "./directives/border-card.directive";
import { PokemonTypeColorPipe} from "./pipes/pokemon-type-color.pipe";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ MainComponent,BorderCardDirective,PokemonTypeColorPipe ],
    bootstrap:    [ MainComponent ]
})
export class MainModule { }