import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { CreateComicComponent } from './create-comic/create-comic.component';
import { ListadoItemComponentComponent } from './listado-item-component/listado-item-component.component';
import { ListOfComicsComponent } from './list-of-comics/list-of-comics.component';
import { HttpClientModule } from '@angular/common/http';
import {ILoginService, LoginService} from './shared/services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    CreateComicComponent,
    ListadoItemComponentComponent,
    ListOfComicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    {provide: ILoginService, useExisting: LoginService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
