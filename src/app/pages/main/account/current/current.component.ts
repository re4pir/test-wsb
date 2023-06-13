import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent {
  menu: any;
  @Input() current_el: any;
  @Output() clickRemove = new EventEmitter();
  remove(id: number){
    this.clickRemove.emit(id);
  }

}
