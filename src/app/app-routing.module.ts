import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComicComponent } from './create-comic/create-comic.component';
import { ListOfComicsComponent } from './list-of-comics/list-of-comics.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterUserComponent
  },
  {
    path: 'create-comic',
    component: CreateComicComponent
  },
  {
    path: 'comics',
    component: ListOfComicsComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
