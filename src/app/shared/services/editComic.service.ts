import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { EditComicModel } from "../model/editComic.model";

export abstract class IEditComicService {
    abstract editComic(comic: EditComicModel): Observable<any>
}

@Injectable({
    providedIn: 'root'
})
export class EditComicService implements IEditComicService {

    constructor(private httpClient: HttpClient) {}

    editComic(comic: EditComicModel): Observable<any> {
        return this.httpClient.put(environment.endpoint + `Comic/${comic.idComic}`, comic);
    }

}