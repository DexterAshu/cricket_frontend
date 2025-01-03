import { Component } from '@angular/core';
import { ApiService } from '../../_services/api.service';

@Component({
  selector: 'app-points-table',
  standalone: true,
  imports: [],
  templateUrl: './points-table.component.html',
  styleUrl: './points-table.component.css'
})
export class PointsTableComponent {

  point: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getPointData();
  }

  getPointData() {
    this.apiService.getPointData().subscribe((res: any) => {
      console.log(res);
      this.point = res.data;
    });
  }
}
