import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComicComponent } from '../create-comic/create-comic.component';
import { DeleteComicDialogComponent } from '../delete-comic-dialog/delete-comic-dialog.component';
import { ComicModel } from '../shared/model/comic.model';
import { IComicService } from '../shared/services/comic.service';

@Component({
  selector: 'app-list-of-comics',
  templateUrl: './list-of-comics.component.html',
  styleUrls: ['./list-of-comics.component.scss']
})
export class ListOfComicsComponent implements OnInit {

  public listOfComics: ComicModel[];

  constructor(
    private comicService: IComicService,

    private dialog: MatDialog
  ) {
    this.listOfComics = [];
  }

  ngOnInit(): void {
   this.getComicsList();
  }

  getComicsList() {
    this.comicService.getComics().subscribe({
      next: (res) => {
        this.listOfComics = [];
        if (res.length > 0) {
          this.listOfComics.push(...res);
        }
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
    });

    
    ref.afterClosed().subscribe({
      next: (res) => {
        this.getComicsList();
      }
    })

  }

  showDeleteRequestDialog(item: number) {
    const ref = this.dialog.open(DeleteComicDialogComponent, {
      width: '500px',
      height: '200px',
    });
    ref.afterClosed().subscribe({
      next: (result) => {
        if (result.action === 'Ok') {
          this.comicService.deleteComic(item).subscribe({
            next: (res) => {
              this.getComicsList();
            }
          })
        }
      }
    })
  }

}
