import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLayoutRoutingModule } from './user-layout-routing.module';
import { UserLayoutComponent } from './user-layout.component';
import { NavbarComponent } from 'src/app/Component/front/navbar/navbar.component';
import { FooterComponent } from 'src/app/Component/front/footer/footer.component';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ChipModule } from 'primeng/chip';





@NgModule({
  declarations: [
    UserLayoutComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    
    
    
  ],
  imports: [
    CommonModule,
    UserLayoutRoutingModule,
    MenubarModule,
    InputTextModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    MenuModule,
    ChipModule
   

    

  ]
})
export class UserLayoutModule { }
