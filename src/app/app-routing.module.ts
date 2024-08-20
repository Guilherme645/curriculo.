import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [

    { path: '', redirectTo: '/index', pathMatch: 'full'},
    {
      path: 'index',
      component:IndexComponent
    },
    {
      path: 'principal',
      component:PrincipalComponent
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
