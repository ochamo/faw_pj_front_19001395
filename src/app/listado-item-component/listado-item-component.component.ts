import { Component, Input, OnInit } from '@angular/core';
import { ComicModel } from '../shared/model/comic.model';

@Component({
  selector: 'app-listado-item-component',
  templateUrl: './listado-item-component.component.html',
  styleUrls: ['./listado-item-component.component.scss']
})
export class ListadoItemComponentComponent implements OnInit {

  @Input()
  comic: ComicModel

  constructor() { }

  ngOnInit(): void {
  }

  public isUserOwner(): boolean {
    return true;
  }

}
