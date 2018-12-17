import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePage,
         HistorialPage,
         MapsPage,
         TabsPage } from '../pages/index.pages';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HistoryProvider } from '../providers/history/history';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { AgmCoreModule } from '@agm/core';
import { Contacts } from '@ionic-native/contacts';
import { PipesModule } from '../pipes/pipes.module';
import { ConfirmPage } from '../pages/confirm/confirm';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    HistorialPage,
    MapsPage,
    ConfirmPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDaMky95fdl-KmXLyuSY7yCKSA5_piTV4o'
    }),
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    HistorialPage,
    MapsPage,
    ConfirmPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HistoryProvider,
    Contacts
  ]
})
export class AppModule {}
