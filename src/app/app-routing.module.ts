import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './modules/admin/users/users/users.component';
import { CreateUserComponent } from './modules/admin/users/create-user/create-user.component';
import { UserCardComponent } from './modules/admin/users/user-card/user-card.component';

const routes: Routes = [
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/users/create-user', component: CreateUserComponent },
  { path: 'admin/users/:id', component: UserCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
