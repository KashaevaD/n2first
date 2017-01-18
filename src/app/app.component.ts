import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public users = [
      // {
      //   name: 'Stepan',
      //   surname: 'Suvorov',
      //   avatar: 'assets/img/stepan.jpg'
      // }
  ];

  public menu: string[] =  [
    "Trainee",
    "Junior",
    "Midddle",
    "Stepan"
  ];

  checkTeam(i):void {
    if (i === null) alert("Value is null");
    else if (i === 0) {
      this.users = [
          {
            name: 'Dasha',
            surname: 'Kashaeva',
            avatar: 'assets/img/dasha.jpg'
          },
          {
            name: 'Alex',
            surname: 'Popov',
            avatar: 'assets/img/alex.jpg'
          },
          {
            name: 'Igor',
            surname: 'Mitropan',
            avatar: 'assets/img/igor.jpg'
          },
          {
            name: 'Andrey',
            surname: 'Suprun',
            avatar: 'assets/img/andrey.jpg'
          },
          {
            name: 'Evgen',
            surname: 'Krasnikov',
            avatar: 'assets/img/evgen.jpg'
          }
      ];
    }
    else if (i === 1) {
      this.users = [
        {
          name: 'Natali',
          surname: 'Uzva',
          avatar: 'assets/img/nataly.jpg'
        },
        {
          name: 'Alla',
          surname: 'Logozinskaya',
          avatar: 'assets/img/alla.jpg'
        },
        {
          name: 'Yaroslav',
          surname: 'Polubiedov',
          avatar: 'assets/img/yaroslav.jpg'
        },
        {
          name: 'Alex',
          surname: 'Komendantov',
          avatar: 'assets/img/alexJunior.jpg'
        }
      ];
    }
    else if (i === 2) {
      this.users = [
        {
          name: 'Pasha',
          surname: 'Lebedinsky',
          avatar: 'assets/img/pasha.png'
        },
        {
          name: 'Sergey',
          surname: 'Pereversiev',
          avatar: 'assets/img/sergey.jpg'
        }
      ];
    }
    else if (i === 3) {
      this.users = [
        {
          name: 'Stepan',
          surname: 'Suvorov',
          avatar: 'assets/img/stepan.jpg'
        }
      ];
      
    }


  }

}

