import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinCreateComponent } from './components/join-create/join-create.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: 'join-create',
    component: JoinCreateComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  // {
  //   path: 'session/:id'
  // },
  {
    path: '',
    redirectTo: '/join-create',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
