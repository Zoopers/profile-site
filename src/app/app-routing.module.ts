import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformaticsComponent } from './informatics/informatics.component';
import { McdstComponent } from './mcdst/mcdst.component';
import { SpatialdimensionComponent } from './spatialdimension/spatialdimension.component';
import { PopcorntrainingComponent } from './popcorntraining/popcorntraining.component';
import { PersonaloverviewComponent } from './personaloverview/personaloverview.component';

const routes: Routes = [
  //{ path: 'heroes', component: HeroesComponent }
    {path: 'bscinformatics', component: InformaticsComponent},
    {path: 'mcdst', component: McdstComponent},
    {path: 'spatialdimension', component: SpatialdimensionComponent},
    {path: 'popcorntraining', component: PopcorntrainingComponent},
    {path: 'personaloverview', component: PersonaloverviewComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}