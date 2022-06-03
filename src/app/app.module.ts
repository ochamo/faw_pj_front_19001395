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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ILoginService, LoginService} from './shared/services/login.service';
import { ISexService, SexService } from './shared/services/sex.service';
import { IRegisterUserService, RegisterUserService } from './shared/services/registerUser.service';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { ITokenService, TokenService } from './shared/services/token.service';
import { AuthInterceptor } from './shared/services/interceptor/auth.interceptor';
import { ComicService, IComicService } from './shared/services/comic.service';
import { CreateComicService, ICreateComicService } from './shared/services/createComic.service';
import { DeleteComicDialogComponent } from './delete-comic-dialog/delete-comic-dialog.component';
import { EditComicComponent } from './edit-comic/edit-comic.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { AuthGuard } from './shared/services/app.guard';
import { LoginGuard } from './shared/services/login.guard';
import { EditComicService, IEditComicService } from './shared/services/editComic.service';

// from the ngx-lottie documentation
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUserComponent,
    CreateComicComponent,
    ListadoItemComponentComponent,
    ListOfComicsComponent,
    SuccessDialogComponent,
    DeleteComicDialogComponent,
    EditComicComponent,
    NavbarComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    LottieModule.forRoot({player: playerFactory})
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: ILoginService, useExisting: LoginService},
    {provide: IComicService, useExisting: ComicService},
    {provide: ISexService, useExisting: SexService},
    {provide: IEditComicService, useExisting: EditComicService},
    {provide: ITokenService, useExisting: TokenService},
    {provide: ICreateComicService, useExisting: CreateComicService},
    {provide: IRegisterUserService, useExisting: RegisterUserService},
    AuthGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
