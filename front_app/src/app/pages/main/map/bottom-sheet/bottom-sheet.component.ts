import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent implements OnInit {
  @Input() id!: any;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>
  ) {}
  ngOnInit(): void {
    this.id = (this._bottomSheetRef.containerInstance._config.data)
   console.log(this._bottomSheetRef.containerInstance._config.data)
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
