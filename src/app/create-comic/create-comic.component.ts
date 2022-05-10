import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-comic',
  templateUrl: './create-comic.component.html',
  styleUrls: ['./create-comic.component.scss']
})
export class CreateComicComponent implements OnInit {

  public createComicForm: FormGroup;

  constructor() { 
    this.initForm();
  }

  private initForm() {
    this.createComicForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'printYear': new FormControl('', [Validators.maxLength(4)]),
      'sinopsis': new FormControl(''),
      'editorial': new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  

}
