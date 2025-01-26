import { Component } from '@angular/core';
import { ApiService } from '../../_services/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.css'
})
export class MatchesComponent {

  matches: any;

  constructor(
    private apiService: ApiService,
    private cookie: CookieService
  ) { }

  ngOnInit(): void {
    console.log("Token: ", this.cookie.check('AuthToken'));
    
    this.getLiveScoreData();
  }

  getLiveScoreData() {
    this.apiService.getMatchesData().subscribe((res: any) => {
      console.log(res);
      this.matches = res.data;
    });
  }
}
