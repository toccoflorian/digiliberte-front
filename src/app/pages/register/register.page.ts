import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/security/authentication.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.page.html',
  styleUrl: './register.page.scss'
})
export class RegisterPage implements OnInit{

  public registerForm!: FormGroup;


  constructor(private _authenticationService: AuthenticationService){}


  public ngOnInit(){
    this.registerForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      emailLogin: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
      pictureURL: new FormControl(null),
    })
  }



  public onSubmit = (e: Event) => {
    e.preventDefault();
    console.log(this.registerForm.valid, this.registerForm.value);
    
    if(this.registerForm.valid){
      this._authenticationService.register$(this.registerForm.value).subscribe(()=>{
      })
    }
  }
}
