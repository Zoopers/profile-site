import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnisaComponent } from './unisa/unisa.component';

const routes: Routes = [
  //{ path: 'heroes', component: HeroesComponent }
    {path: 'unisa', component: UnisaComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}