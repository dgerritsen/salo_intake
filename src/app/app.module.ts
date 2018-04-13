import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {ArrivingComponent} from './arriving/arriving.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ArrivingHomeComponent} from './arriving/arriving-home/arriving-home.component';
import {ArrivingScanComponent} from './arriving/arriving-scan/arriving-scan.component';
import {ArrivingSavedComponent} from './arriving/arriving-saved/arriving-saved.component';
import {ArrivingHistoryComponent} from './arriving/arriving-history/arriving-history.component';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,

    ArrivingComponent,
    ArrivingHomeComponent,
    ArrivingScanComponent,
    ArrivingSavedComponent,
    ArrivingHistoryComponent,

    HomeComponent,
    LoginComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
