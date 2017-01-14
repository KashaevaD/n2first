import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

public users = [
  {
    name: 'Dasha',
    surname: 'Kashaeva',
    avatar: 'http://s012.radikal.ru/i319/1701/f1/bc7f22ff0076.jpg'
  },
  {
    name: 'Alex',
    surname: 'Popov',
    avatar: './assets/img/alex.jpg'
  },
  {
    name: 'Igor',
    surname: 'Mitropan',
    avatar: './assets/img/igor.jpg'
  },
  {
    name: 'Andrey',
    surname: 'Suprun',
    avatar: './assets/img/andrey.jpg'
  },
  {
    name: 'Evgen',
    surname: 'Krasnikov',
    avatar: './assets/img/evgen.jpg'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
