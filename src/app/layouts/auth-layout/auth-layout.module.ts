import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLayoutRoutingModule } from './auth-layout-routing.module';
import { AuthLayoutComponent } from './auth-layout.component';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {PasswordModule} from 'primeng/password';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthLayoutRoutingModule,
    InputTextModule,
    InputTextareaModule,
    PasswordModule
  ]
})
export class AuthLayoutModule { }
