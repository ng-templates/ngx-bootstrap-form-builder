import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { DemoComponent } from './demo/demo.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'getting-started'
  },
  {
    path: 'getting-started',
    component: GettingStartedComponent
  },
  {
    path: 'demo',
    component: DemoComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'basic'
      },
      {
        path: 'basic',
        component: BasicComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'checkout',
        component: RegistrationComponent
      },
      {
        path: 'questionnaire',
        component: RegistrationComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
