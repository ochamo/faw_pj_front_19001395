import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, pipe } from 'rxjs';
import { LoginModel } from '../shared/model/login.model';
import { ILoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public loginForm: FormGroup;
  userNotFoundMessage: string;

  constructor(
    private router: Router,
    private loginService: ILoginService
  ) { 
    this.initForm();
    this.userNotFoundMessage = "";
  }

  ngOnInit(): void {
  }

  private initForm() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required])
    });
  }

  public registerUser() {
    this.router.navigate(['/register']);
  }

  public login() {
    this.loginService.login(new LoginModel())
    .subscribe({
      next: (res) =>{
        console.log("res");
        console.log(res);
      },
      error: (error) => {
        if (error.error instanceof ErrorEvent) {
          console.log(error);

        } else {
          console.log(error);

        }
      }
    });
  }

  private handleError(error: any) {

  }

}
