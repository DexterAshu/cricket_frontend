import { Component } from '@angular/core';
import { ApiService } from '../../_services/api.service';

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
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getLiveScoreData();
  }

  getLiveScoreData() {
    this.apiService.getMatchesData().subscribe((res: any) => {
      console.log(res);
      this.matches = res.data;
    });
  }
}
