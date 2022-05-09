import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public loginForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.initForm();
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

}
