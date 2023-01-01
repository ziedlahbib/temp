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
import { GalleriaModule } from 'primeng/galleria';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {SplitButtonModule} from 'primeng/splitbutton';
import {DataViewModule} from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';







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
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    InputTextModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    MenuModule,
    ChipModule,
    GalleriaModule,
    CardModule,
    CarouselModule,
    SplitButtonModule,
    DataViewModule,
    DropdownModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
  
  ]
})
export class UserLayoutModule { }
