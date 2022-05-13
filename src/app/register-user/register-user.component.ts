import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterModel } from '../shared/model/register.model';
import { SexModel } from '../shared/model/sex.model';
import { RegisterUserService } from '../shared/services/registerUser.service';
import { ISexService } from '../shared/services/sex.service';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  public registerForm: FormGroup
  public error: string;
  public sexes: SexModel[];


  constructor(
    private router: Router,
    private sexService: ISexService,
    private registerUserService: RegisterUserService,
    private dialog: MatDialog
  ) { 
    this.initForm();
    this.error = "";
    this.sexes = [];
  }

  private initForm() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.minLength(6)]),
      dateOfBirth: new FormControl('', Validators.required),
      userSex: new FormControl(1, Validators.required)
    })
  }

  private getSexes() {
    this.sexService.getSexes().subscribe({next: (v) => {
      this.sexes = v;
    }, error: (error) =>{
      console.log(error)
    }})
  }

  ngOnInit(): void {
    this.getSexes();
  }

  public login() {
    this.router.navigate(['/login'])
  }

  public registerUser() {
    if (this.registerForm.valid) {
      let registerModel = new RegisterModel(
        this.registerForm.get('name')?.value,
        this.registerForm.get('userName')?.value,
        this.registerForm.get('pass')?.value,
        this.registerForm.get('dateOfBirth')?.value,
        this.registerForm.get('userSex')?.value
      );
      this.createUser(registerModel);
    }
  }

  private createUser(user: RegisterModel) {
    this.registerUserService.createUser(user).subscribe({
      next: (result) => {
        const ref = this.dialog.open(SuccessDialogComponent, {
          width: '500px'
        });

        ref.afterClosed().subscribe(result => {
          this.router.navigate(['/login']);
        });
      },
      error: (e) => {
        this.error = e.error;
      }
    });
  }

}
