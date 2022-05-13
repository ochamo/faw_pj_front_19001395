import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RegisterModel } from "../model/register.model";

export abstract class IRegisterUserService {
    abstract createUser(newUser: RegisterModel): Observable<any>
}

@Injectable({
    providedIn: 'root'
})
export class RegisterUserService implements IRegisterUserService {
    
    constructor(
        private httpClient: HttpClient
    ) {}

    createUser(newUser: RegisterModel): Observable<any> {
        return this.httpClient.post(environment.endpoint + 'CreateAccount', newUser);
    }
}