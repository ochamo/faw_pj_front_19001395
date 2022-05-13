import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComicComponent } from './create-comic/create-comic.component';
import { ListOfComicsComponent } from './list-of-comics/list-of-comics.component';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AuthGuard } from './shared/services/app.guard';
import { LoginGuard } from './shared/services/login.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'register',
    component: RegisterUserComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'comics',
    component: ListOfComicsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
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
