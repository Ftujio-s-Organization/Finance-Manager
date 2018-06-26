import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { ApiModule } from '@api/api.module';

import { NgxElectronModule } from 'ngx-electron';

import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    ApiModule,
    MainModule,
    NgxElectronModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
