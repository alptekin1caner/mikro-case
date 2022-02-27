import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Member } from '../../models/Member';
import { DashboardApiService } from '../../services/dashboard-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title:string = 'Dashboard';
  public members: Member[];

  constructor(private titleService: Title, private dashboardApi: DashboardApiService) {
   }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    this.dashboardApi.
    getData()
    .subscribe((data:any) => {
      this.members = data.data;
    });
  }

}
