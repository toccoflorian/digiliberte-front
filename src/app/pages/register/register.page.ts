import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../../services/security/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public registerForm!: FormGroup;
  public passwordsMatch: boolean = true;
  public showPassword: boolean = false; // Ajouté pour gérer la visibilité du mot de passe
  public showConfirmPassword: boolean = false; // Ajouté pour gérer la visibilité de la confirmation du mot de passe

  constructor(
    private _authenticationService: AuthenticationService,
    private router: Router
  ) {}

  public ngOnInit() {
    this.registerForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      emailLogin: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!?@#$%^&*+-]).{8,}$'),
      ]),
      confirmPassword: new FormControl(null, Validators.required),
    });

    // Vérification des mots de passe à chaque changement
    this.registerForm.valueChanges.subscribe(() => {
      const password = this.registerForm.get('password')?.value;
      const confirmPassword = this.registerForm.get('confirmPassword')?.value;
      this.passwordsMatch = password === confirmPassword;
    });
  }

  public onSubmit = (e: Event) => {
    e.preventDefault();
    if (this.registerForm.valid && this.passwordsMatch) {
      this._authenticationService.register$(this.registerForm.value).subscribe(
        () => {
          // Rediriger vers la page de connexion après une inscription réussie
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Registration failed:', error);
        }
      );
    } else {
      console.error(
        'Formulaire invalide ou les mots de passe ne correspondent pas'
      );
    }
  };

  public onCancel() {
    this.registerForm.reset();
    this.router.navigate(['/login']); // Rediriger vers la page de connexion si l'utilisateur annule
  }

  // Méthodes pour afficher/masquer les mots de passe
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
