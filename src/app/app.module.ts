import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {MegaMenuModule} from 'primeng/megamenu';
import { AppRoutingModule } from './/app-routing.module';
import { UnisaComponent } from './unisa/unisa.component';
import { MenubarComponent } from './menubar/menubar.component';
import { MenubarModule, MenuItem } from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UnisaComponent,
    MenubarComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    MenuModule,
    MegaMenuModule,
    AppRoutingModule,
    MenubarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
