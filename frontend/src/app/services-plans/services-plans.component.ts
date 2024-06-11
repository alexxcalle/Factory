import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-services-plans',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NzTableModule, NzButtonModule
  ],
  templateUrl: './services-plans.component.html',
  styleUrl: './services-plans.component.css',
  host: {
    'ngSkipHydration':''
},})

export class ServicesPlansComponent implements OnInit{
  public data: any[] = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.httpClient
      .get('http://localhost:3000/api')
      .subscribe((data: any) => {
        console.log(data);
        this.data = data;
      });
  }

  delete(id: number): void {
    this.httpClient
      .delete(`http://localhost:3000/api/${id}`)
      .subscribe(() => {
        this.fetchData();
      });
  }

  patch(id: number): void {
    this.httpClient
      .patch(`http://localhost:3000/api/${id}`, { name: 'new name' })
      .subscribe(() => {
        this.fetchData();
      });
  }
}
