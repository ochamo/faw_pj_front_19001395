import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ComicModel } from "../model/comic.model";

export abstract class IComicService {
    abstract getComics(): Observable<ComicModel[]>
    abstract deleteComic(id: number): Observable<any>
}

@Injectable({
    providedIn: 'root'
})
export class ComicService implements IComicService {

    constructor(private httpClient: HttpClient) {}

    getComics(lastId: number = 0): Observable<ComicModel[]> {
        return this.httpClient.get<ComicModel[]>(environment.endpoint + `Comic/${lastId}`);
    }

    deleteComic(id: number): Observable<any> {
        return this.httpClient.delete(environment.endpoint + `Comic/${id}`);
    }

}

