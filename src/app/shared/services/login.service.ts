import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../model/login.model';
import { AuthResponse } from '../response/auth.response';
import { environment } from '../../../environments/environment';

export abstract class ILoginService {
    abstract login(loginData: LoginModel): Observable<AuthResponse>;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService implements ILoginService {

   constructor(
       private http: HttpClient
   ) { }
   
   login(loginData: LoginModel): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(environment.endpoint + 'Login', loginData);
   }

}
