import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"
import { CreateComicModel } from "../model/createComic.model"

export abstract class ICreateComicService {
    abstract createComic(comic: CreateComicModel): Observable<any>
}

@Injectable({
    providedIn: 'root'
})

export class CreateComicService implements ICreateComicService {

    constructor(
        private httpClient: HttpClient
    ) {}

    createComic(comic: CreateComicModel): Observable<any> {
        return this.httpClient.post(environment.endpoint + 'Comic', comic);
    }

}