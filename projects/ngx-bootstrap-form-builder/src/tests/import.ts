import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserTestingModule } from "@angular/platform-browser/testing";
import { NgxBootstrapFormBuilderService } from './../lib/form-builder.service';
// import { ErrorComponent, TestOneComponent, TestThreeComponent, TestTwoComponent } from "./components";

export const TEST_IMPORTS = (declarations: any[] =[], providers: any[] = [], modules: any[] = []): NgModule => ({
  declarations,
  imports: [
    BrowserTestingModule,
    FormsModule,
    ReactiveFormsModule,
    ...modules,
    // RouterTestingModule.withRoutes([
    //   {
    //     path: 'dashboard',
    //     component: TestOneComponent,
    //     children: [
    //       {
    //         path: 'home',
    //         component: TestTwoComponent,
    //       },
    //       {
    //         path: ':location',
    //         component: TestThreeComponent
    //       }
    //     ]
    //   },
    //   {
    //     path: '404',
    //     component: ErrorComponent
    //   }
    // ])
  ],
  providers: [...providers, NgxBootstrapFormBuilderService]
})
