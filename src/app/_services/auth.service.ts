import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AppConfig } from '../config';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  private isAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticated.asObservable();

  private apiUrl = AppConfig.apiUrl;

  constructor() {
    // this.checkLoginStatus(); // Check login status on page load
  }

  login(data: any) {
    return this.http.post(`${this.apiUrl}/api/login`, data);
  }

  logout() {
    // return this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true }).subscribe(() => {
    //   this.isAuthenticated.next(false);
    //   this.router.navigate(['/login']);
    // });
  }

  checkLoginStatus() {
    this.http.get(`${this.apiUrl}/api/verify-token`).subscribe({
      next: () => this.isAuthenticated.next(true),
      error: () => this.isAuthenticated.next(false)
    });
  }
}
