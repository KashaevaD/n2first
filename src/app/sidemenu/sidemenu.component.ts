import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
// array = ["First", "Second", "Third"];
  whatShow:number = null;
  @Input() menu;
  @Output() numberPush: EventEmitter<number> = new EventEmitter();

  show(i) {
    this.whatShow = i;
    this.numberPush.emit(this.whatShow);
  }

  constructor() { }

  ngOnInit() {
  }

 
}
