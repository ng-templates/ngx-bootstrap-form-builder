import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  tabs = [
    {
      name: 'Basic',
      route: 'basic'
    },
    {
      name: 'Registration',
      route: 'registration'
    },
    {
      name: 'Checkout',
      route: 'checkout'
    },
    {
      name: 'Questionnaire',
      route: 'questionnaire'
    }
  ]

}
