import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  menu= [
    {
      name: 'Getting Started',
      route: 'getting-started'
    },
    {
      name: 'Docs',
      route: 'docs'
    },
    {
      name: 'Examples',
      route: 'examples'
    },
    {
      name: 'Demo',
      route: 'demo'
    }
  ]

}
