import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  public registerForm: FormGroup

  constructor(
    private router: Router
  ) { 
    this.initForm();
  }

  private initForm() {
    this.registerForm = new FormGroup({
      name: new FormControl(''),
      userName: new FormControl(''),
      pass: new FormControl(''),
      dateOfBirth: new FormControl(''),
      userSex: new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  public login() {
    this.router.navigate(['/login'])
  }

}
