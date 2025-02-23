import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/components/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  userType: string ="USER";
  passwordMismatch: boolean = false; // Define the property here

  constructor(private authService: AuthService,private router:Router) { }

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.passwordMismatch = true;
      return;
    }
    this.passwordMismatch = false; // Reset mismatch error if passwords match

    this.authService.signUp(this.username, this.password).subscribe({
      next: (response) => this.router.navigate(['login']),
      error: (error) => console.error("Erreur d'inscription", error)
    });
  }
}
