import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {TableModule} from 'primeng/table';
import {MegaMenuModule} from 'primeng/megamenu';
import { AppRoutingModule } from './/app-routing.module';
import { MenubarComponent } from './menubar/menubar.component';
import { MenubarModule, MenuItem, AccordionModule } from 'primeng/primeng';
import { InformaticsComponent } from './informatics/informatics.component';
import { McdstComponent } from './mcdst/mcdst.component';
import { SpatialdimensionComponent } from './spatialdimension/spatialdimension.component';
import { PopcorntrainingComponent } from './popcorntraining/popcorntraining.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenubarComponent,
    InformaticsComponent,
    McdstComponent,
    SpatialdimensionComponent,
    PopcorntrainingComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    MenuModule,
    MegaMenuModule,
    AppRoutingModule,
    MenubarModule,
    AccordionModule,
    BrowserAnimationsModule,
    TableModule,
    DataTableModule,
    FormsModule,
    PanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
