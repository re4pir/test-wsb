import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../users.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  ngOnInit(): void {

  }
  @Input() user: any;
}
