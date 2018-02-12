import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { UserComponent } from './user.component';

const routes: Routes = Route.withShell([
  { path: 'user', component: UserComponent, data: { title: extract('User') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UserRoutingModule { }
