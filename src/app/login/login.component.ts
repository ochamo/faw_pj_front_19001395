import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, pipe } from 'rxjs';
import { LoginModel } from '../shared/model/login.model';
import { ILoginService } from '../shared/services/login.service';
import { ITokenService } from '../shared/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public loginForm: FormGroup;
  userNotFoundMessage: boolean;

  constructor(
    private router: Router,
    private loginService: ILoginService,
    private tokenService: ITokenService
  ) { 
    this.initForm();
    this.userNotFoundMessage = false;
    console.log("here")
  }

  ngOnInit(): void {
  }

  private initForm() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  public registerUser() {
    this.router.navigate(['/register']);
  }

  public login() {
    if (this.loginForm.valid) {
      let loginModel = new LoginModel(
        this.loginForm.get('userName')?.value,
        this.loginForm.get('pass')?.value
        );
      this.doLogin(loginModel);
    }
  }

  private doLogin(loginModel: LoginModel) {
    this.loginService.login(loginModel)
      .subscribe({
        next: (res) => {
          this.tokenService.saveAuth(res);
          this.router.navigate(['/comics']);

        },
        error: this.handleError
      });
  }

  private handleError(error: any) {
    if (error.error instanceof ErrorEvent) {
    } else {
      console.log(error);
      this.userNotFoundMessage = true;
    }
  }

}
