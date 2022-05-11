import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { SexModel } from "../model/sex.model";

export abstract class ISexService {
    abstract getSexes(): Observable<SexModel[]>
}

@Injectable({
    providedIn: 'root'
})
export class SexService {

    constructor(private httpClient: HttpClient) {}
    
    getSexes(): Observable<SexModel[]> {
        return this.httpClient.get<SexModel[]>(environment.endpoint + 'Sex');
    }

}