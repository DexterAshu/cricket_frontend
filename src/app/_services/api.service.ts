import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private loggedInKey = 'Login';
  apiUrl: string = 'http://localhost:8080';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient,
    // private router: Router
  ) { }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  login() {
    if (this.isBrowser()) {
      sessionStorage.setItem(this.loggedInKey, 'true');
    }
  }

  logout() {
    if (this.isBrowser()) {
      sessionStorage.removeItem(this.loggedInKey);
    }
  }

  isLoggedIn(): boolean {
    return this.isBrowser() && sessionStorage.getItem(this.loggedInKey) === 'true';
  }

  getLiveScoreData() {
    return this.http.get(`${this.apiUrl}/api/liveScore`);
  }
  
  getMatchesData() {
    return this.http.get(`${this.apiUrl}/api/matches`);
  }
  
  getPointData() {
    return this.http.get(`${this.apiUrl}/api/point-table`);
  }

}
