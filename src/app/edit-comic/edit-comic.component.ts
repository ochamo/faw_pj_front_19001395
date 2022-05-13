import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateComicComponent } from '../create-comic/create-comic.component';
import { ComicModel } from '../shared/model/comic.model';
import { CreateComicModel } from '../shared/model/createComic.model';
import { EditComicModel } from '../shared/model/editComic.model';
import { EditorialModel } from '../shared/model/editorial.model';
import { CreateComicService } from '../shared/services/createComic.service';
import { EditComicService } from '../shared/services/editComic.service';
import { EditorialService } from '../shared/services/editorial.service';

@Component({
  selector: 'app-edit-comic',
  templateUrl: './edit-comic.component.html',
  styleUrls: ['./edit-comic.component.scss']
})
export class EditComicComponent implements OnInit {

  public editComicForm: FormGroup;
  public editorials: EditorialModel[];

  constructor(
    private dialogRef: MatDialogRef<CreateComicComponent>,
    private editorialService: EditorialService,
    private editComicService: EditComicService,
    @Inject(MAT_DIALOG_DATA) public data: ComicModel
  ) { 
    this.editorials = [];
    this.initForm();
    this.getEditorials();
  }

  private initForm() {
    this.editComicForm = new FormGroup({
      'name': new FormControl(this.data.name, [Validators.required]),
      'printYear': new FormControl(this.data.printYear, [Validators.maxLength(4)]),
      'sinopsis': new FormControl(this.data.sinopsis, [Validators.required]),
      'editorial': new FormControl(this.data.idEditorial, [Validators.required])
    });
  }

  ngOnInit(): void {}

  private getEditorials() {
    this.editorialService.getEditorials().subscribe({
      next: (res) => {
        this.editorials = res;
      },
      error: (error) => {
      }
    })
  }

  public editComic() {
    if (this.editComicForm.valid) {
      let comicModel = new EditComicModel();
      comicModel.comicName = this.editComicForm.get('name')?.value;
      comicModel.comicPrintYear = this.editComicForm.get('printYear')?.value;
      comicModel.comicSinopsis = this.editComicForm.get('sinopsis')?.value;
      comicModel.comicEditorial = this.editComicForm.get('editorial')?.value;
      comicModel.idComic = this.data.comicId;
      this.doEditComic(comicModel);
    }
  }

  private doEditComic(comic: EditComicModel) {
    this.editComicService.editComic(comic).subscribe({
      next: (res) => {
        this.dialogRef.close();
      }, 
      error: (error) => {
        console.log(error);
      }
    })
  }

}
