import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './navbar.component';
import { TopBannerComponent } from './topbanner.component';
import { CategoryMenuComponent } from './categorymenu.component';
import { SearchBarComponent } from './searchbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    TopBannerComponent,
    CategoryMenuComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }