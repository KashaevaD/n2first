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
    avatar: 'n2first/assets/img/dasha.jpg'
  },
  {
    name: 'Alex',
    surname: 'Popov',
    avatar: 'n2first/assets/img/alex.jpg'
  },
  {
    name: 'Igor',
    surname: 'Mitropan',
    avatar: 'n2first/assets/img/igor.jpg'
  },
  {
    name: 'Andrey',
    surname: 'Suprun',
    avatar: 'n2first/assets/img/andrey.jpg'
  },
  {
    name: 'Evgen',
    surname: 'Krasnikov',
    avatar: 'n2first/assets/img/evgen.jpg'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
