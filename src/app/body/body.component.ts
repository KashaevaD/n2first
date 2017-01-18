import { Input, Output,EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() menu;
  @Input() users;
  @Output() numberPush: EventEmitter<number> = new EventEmitter();

  sendingNumber = null;


  constructor() { }


  sendToApp(i) {
    this.sendingNumber = i;
    this.numberPush.emit(this.sendingNumber);
  }
  ngOnInit() {
  }

}
