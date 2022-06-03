import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { EditorialModel } from "../model/editorial.model";

export abstract class IEditorialService {
    abstract getEditorials(): Observable<EditorialModel[]>
}

@Injectable({
    providedIn: 'root'
})

export class EditorialService implements IEditorialService {

    constructor(
        private httpClient: HttpClient
    ) {}

    getEditorials(): Observable<EditorialModel[]> {
        return this.httpClient.get<EditorialModel[]>(environment.endpoint + 'Editorial');
    }

}