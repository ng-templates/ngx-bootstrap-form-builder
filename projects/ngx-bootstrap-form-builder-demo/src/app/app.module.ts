import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBootstrapFormBuilderModule } from './../../../ngx-bootstrap-form-builder/src/lib/form-builder.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    CheckoutComponent,
    BasicComponent,
    QuestionnaireComponent,
    NavbarComponent,
    GettingStartedComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapFormBuilderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
