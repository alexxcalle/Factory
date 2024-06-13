import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-services-plans',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NzTableModule, NzButtonModule, ],
  templateUrl: './services-plans.component.html',
  styleUrl: './services-plans.component.css',
  host: {
    'ngSkipHydration':''
},})

export class ServicesPlansComponent implements OnInit{
  public data: any[] = [];
  public displayedColumns: string[] = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.httpClient
      .get('http://localhost:3000/services-plans')
      .subscribe((data: any) => {
        console.log(data);
        this.data = data;
        if(this.data.length > 0){
          this.displayedColumns = Object.keys(this.data[0]);
        }
      });
  }

  delete(id: number): void {
    this.httpClient
      .delete(`http://localhost:3000/services-plans/${id}`)
      .subscribe(() => {
        this.fetchData();
      });
  }

  patch(id: number): void {
    this.httpClient
      .patch(`http://localhost:3000/services-plans/${id}`, { name: 'new name' })
      .subscribe(() => {
        this.fetchData();
      });
  }


}
