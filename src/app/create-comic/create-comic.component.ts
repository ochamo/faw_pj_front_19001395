import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ComicModel } from '../shared/model/comic.model';
import { CreateComicModel } from '../shared/model/createComic.model';
import { EditorialModel } from '../shared/model/editorial.model';
import { ComicService } from '../shared/services/comic.service';
import { CreateComicService } from '../shared/services/createComic.service';
import { EditorialService } from '../shared/services/editorial.service';

@Component({
  selector: 'app-create-comic',
  templateUrl: './create-comic.component.html',
  styleUrls: ['./create-comic.component.scss']
})
export class CreateComicComponent implements OnInit {

  public createComicForm: FormGroup;
  public editorials: EditorialModel[];

  constructor(
    private dialogRef: MatDialogRef<CreateComicComponent>,
    private editorialService: EditorialService,
    private createComicService: CreateComicService,
  ) { 
    this.editorials = [];
    this.initForm();
    this.getEditorials();
  }

  private initForm() {
    this.createComicForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'printYear': new FormControl('', [Validators.maxLength(4)]),
      'sinopsis': new FormControl('', [Validators.required]),
      'editorial': new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.editorialService.getEditorials().subscribe({
      next: (res) => {

      }
    })
  }

  private getEditorials() {
    this.editorialService.getEditorials().subscribe({
      next: (res) => {
        this.editorials = res;
      },
      error: (error) => {
      }
    })
  }

  public createComic() {
    if (this.createComicForm.valid) {
      let comicModel = new CreateComicModel();
      comicModel.name = this.createComicForm.get('name')?.value;
      comicModel.printYear = this.createComicForm.get('printYear')?.value;
      comicModel.sinopsis = this.createComicForm.get('sinopsis')?.value;
      comicModel.idEditorial = this.createComicForm.get('editorial')?.value;

      this.doCreateComic(comicModel);
    }
  }

  private doCreateComic(comic: CreateComicModel) {
    this.createComicService.createComic(comic).subscribe({
      next: (res) => {
        this.dialogRef.close();
      }, 
      error: (error) => {
        console.log(error);
      }
    })
  }

}
