import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { HttpClient } from '@angular/common/http';

export interface Place {
  id: number;
  name: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  places: any[] = [];
  constructor(private _bottomSheet: MatBottomSheet, private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(
        'https://localhost:7017/WorkSpaces/GetAllByFoorAndDep?floor=1&departmentId=1',
        { responseType: 'json' }
      )
      .subscribe({
        next: (res: any) => {
          this.places = res;
          console.log(this.places);
        },
      });
  }

  openBottomSheet(id: number): void {
    this._bottomSheet.open(BottomSheetComponent, { data: { id } });
  }
}
