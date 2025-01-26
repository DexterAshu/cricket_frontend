import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../config';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiUrl = AppConfig.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

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
