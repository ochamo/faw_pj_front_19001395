import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComicComponent } from '../create-comic/create-comic.component';
import { ComicModel } from '../shared/model/comic.model';
import { ComicService } from '../shared/services/comic.service';

@Component({
  selector: 'app-list-of-comics',
  templateUrl: './list-of-comics.component.html',
  styleUrls: ['./list-of-comics.component.scss']
})
export class ListOfComicsComponent implements OnInit {

  public listOfComics: ComicModel[];

  constructor(
    private comicService: ComicService,
    private dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.comicService.getComics().subscribe({
      next: (res) => {
        this.listOfComics.push(...res);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  openCreateComic() {
    const ref = this.dialog.open(CreateComicComponent, {
      width: '500px',
      height: '500px'
    })
  }

}
