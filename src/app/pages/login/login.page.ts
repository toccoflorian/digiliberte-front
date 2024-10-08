import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/security/authentication.service';
import { LoginRequest } from '../../../interfaces/authentication/loginRequest';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss'
})
export class LoginPage implements OnInit{
  public loginForm!: FormGroup;
  private loginFormValue!: any;

  constructor(private _authenticationService: AuthenticationService, private _router: Router){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
 
  onLoginSubmit(event: Event): void{
    event.preventDefault();
    this.loginFormValue = this.loginForm.value;
    this._authenticationService.login$(new LoginRequest(this.loginFormValue.email, this.loginFormValue.password), );
  }

  public onRegisterClick = () => {
    this._router.navigate(['/register']);
  } 
}
