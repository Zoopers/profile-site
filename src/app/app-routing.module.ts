import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformaticsComponent } from './informatics/informatics.component';
import { McdstComponent } from './mcdst/mcdst.component';
import { SpatialdimensionComponent } from './spatialdimension/spatialdimension.component';
import { PopcorntrainingComponent } from './popcorntraining/popcorntraining.component';
import { PersonaloverviewComponent } from './personaloverview/personaloverview.component';
import { SkillsComponent } from './skills/skills.component';
import { VideogamesComponent } from './videogames/videogames.component';
import { ReadingComponent } from './reading/reading.component';
import { AnimalsComponent } from './animals/animals.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'bscinformatics', component: InformaticsComponent},
    {path: 'mcdst', component: McdstComponent},
    {path: 'spatialdimension', component: SpatialdimensionComponent},
    {path: 'popcorntraining', component: PopcorntrainingComponent},
    {path: 'personaloverview', component: PersonaloverviewComponent},
    //{path: 'about', component: AboutComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'videogames', component: VideogamesComponent},
    {path: 'reading', component: ReadingComponent},
    {path: 'animals', component: AnimalsComponent},

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}