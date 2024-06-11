import { Component, OnInit } from '@angular/core';
import { ServicesPlansComponent } from '../../services-plans/services-plans.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [ServicesPlansComponent]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
