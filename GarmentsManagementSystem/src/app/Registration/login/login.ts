import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/Auth/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  
  loginForm!: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (response) => {
        this.successMessage = 'Login successful!';
        this.errorMessage = null;

        const role = this.authService.getUserRole();

        if (role === 'SUPERADMIN') {
          this.router.navigate(['/superAdminProfile']);
        } else if (role === 'HRADMIN') {
          this.router.navigate(['/hrAdminProfile']);
        } else if (role === 'ADMIN') {
          this.router.navigate(['/adminProfile']);
        }
         else if (role === 'MERCHANDISERMANAGER') {
          this.router.navigate(['/merchanProfile']);
        } 
         else if (role === 'PURCHASEMANAGER') {
          this.router.navigate(['/purchaseManagerProfile']);
        } 
         else if (role === 'PRODUCTIONMANAGER') {
          this.router.navigate(['/proManagerProfile']);
        } 
        else {
          this.router.navigate(['/']); // fallback
        }
      },
      error: (err) => {
        this.errorMessage = 'Login failed. Please check your credentials.';
        this.successMessage = null;
      }
    });
  }

}
