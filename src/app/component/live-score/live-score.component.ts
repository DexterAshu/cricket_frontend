import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-live-score',
  standalone: true,
  imports: [],
  templateUrl: './live-score.component.html',
  styleUrl: './live-score.component.css'
})
export class LiveScoreComponent implements OnInit {

  liveScoreData: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getLiveScoreData();
  }

  getLiveScoreData() {
    this.apiService.getLiveScoreData().subscribe((res: any) => {
      // console.log(res);
      this.liveScoreData = res.data;
    });
  }
}
