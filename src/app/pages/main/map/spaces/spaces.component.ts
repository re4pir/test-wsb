import { Component, Input, OnInit } from '@angular/core';
import { Place } from '../map.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-spaces',
  templateUrl: './spaces.component.html',
  styleUrls: ['./spaces.component.scss'],
})
export class SpacesComponent implements OnInit {
  positionx = []
  constructor(private http: HttpClient){}
  ngOnInit(): void {
  }
  @Input() place: any;
}
