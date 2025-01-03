import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(
    private apiService: ApiService,
  ){}

  isLoggedIn(): boolean {
    return this.apiService.isLoggedIn();
  }

  logout() {
    this.apiService.logout();
  }


}
