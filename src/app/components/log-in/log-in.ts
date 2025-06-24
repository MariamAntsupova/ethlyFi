import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-log-in',
  imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      HttpClientModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule
    ],
  templateUrl: './log-in.html',
  styleUrl: './log-in.css'
})
export class LogIn implements OnInit {
 signinForm!: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.signinForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePassword() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
    if (this.signinForm.valid) {
      const formValue = this.signinForm.value;
      const newUserId = localStorage.getItem('newUserId');

      const requestBody = {
        emailOrUsername: formValue.username,
        password: formValue.password,
        twoFactorCode: null,
        rememberMe: null,
        userId: newUserId
      };
      console.log('Sending :', requestBody);
      this.http.post('https://api.salesvault.vc/identity/api/auth/login-for-direct', requestBody).subscribe({
        next: (res: any) => {
          console.log('✅ Login success:', res);

          if (res?.accessToken) {
            localStorage.setItem('accessToken', res);
          }
          localStorage.removeItem('newUserId');
          window.location.href = `https://salesvault.vc/auth/confirm/${res}`;
        },
        error: (err) => {
          console.error('❌ Login error:', err);
          if (err.status === 401) {
            alert('⚠️ Invalid username or password.');
          } else {
            alert('❌ Login failed. Please try again later.');
          }
        }
      });
    } else {
      this.signinForm.markAllAsTouched();
    }
  }
}