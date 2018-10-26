import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent }  from './main.component';

import {BorderCardDirective} from "./directives/border-card.directive";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ MainComponent,BorderCardDirective ],
    bootstrap:    [ MainComponent ]
})
export class MainModule { }