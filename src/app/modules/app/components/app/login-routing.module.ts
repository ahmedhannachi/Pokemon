import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuardService} from "../../guards/auth-guard.service";
import {AuthService} from "../../auth.service";
import {LoginComponent} from "../login/login.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'login', component: LoginComponent}
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuardService,
        AuthService
    ]
})
export class LoginRoutingModule {
}