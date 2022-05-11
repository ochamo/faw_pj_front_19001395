import { Injectable } from "@angular/core";
import { AuthResponse } from "../response/auth.response";

export abstract class ITokenService {
    abstract saveAuth(auth: AuthResponse): void
    abstract getToken(): string
    abstract getId(): number
    abstract clear(): void
}

@Injectable({
    providedIn: 'root'
})
export class TokenService implements ITokenService {
    
    getToken(): string {
        let token = localStorage.getItem('t');
        if (token == null) return '';
        return token;
    }
    getId(): number {
        let id = localStorage.getItem('xyz');
        if (id == null) return -1;
        return parseInt(id);       
    }
    
    saveAuth(auth: AuthResponse): void {
        localStorage.setItem('t', auth.jwt);
        localStorage.setItem('xyz', `${auth.xyz}`);
    }

    clear(): void {
        localStorage.clear();
    }


}