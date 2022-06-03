import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ComicModel } from '../shared/model/comic.model';
import { ITokenService } from '../shared/services/token.service';

@Component({
  selector: 'app-listado-item-component',
  templateUrl: './listado-item-component.component.html',
  styleUrls: ['./listado-item-component.component.scss']
})
export class ListadoItemComponentComponent implements OnInit {

  @Input()
  comic: ComicModel

  @Output() deleteItemRequest = new EventEmitter<number>();
  @Output() editItemRequest = new EventEmitter<ComicModel>();

  constructor(
    private tokenService: ITokenService
  ) { }

  ngOnInit(): void {
  }

  public isUserOwner(): boolean {
    return this.comic.userId == this.tokenService.getId();
  }

  public deleteItem(idComic: number): void {
    this.deleteItemRequest.emit(idComic);
  }

  public editItem(comic: ComicModel): void {
    this.editItemRequest.emit(comic);
  }

}
