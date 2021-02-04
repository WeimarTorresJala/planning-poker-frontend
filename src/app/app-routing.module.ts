import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinCreateComponent } from './components/join-create/join-create.component';
import { AboutComponent } from './components/about/about.component';
import { CreateComponent } from './components/create/create.component';
import { UserComponent } from './components/user/user.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { SessionComponent } from './components/session/session.component';

const routes: Routes = [
  {
    path: 'join-create',
    component: JoinCreateComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'create/:sessionId/questions',
    component: QuestionsComponent
  },
  {
    path: 'create/:sessionId/user',
    component: UserComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'session/:sessionId/user/:userName',
    component: SessionComponent
  },
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
