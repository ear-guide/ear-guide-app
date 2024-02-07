// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

import * as Hammer from 'hammerjs';

import {
  BrowserModule,
  HammerModule,
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from '@angular/platform-browser';

import { NgModule, isDevMode, importProvidersFrom, Injectable, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrScannerComponent } from './views/qr-scanner/qr-scanner.component';
import { ReaderComponent } from './views/reader/reader.component';
import { ErrorComponent } from './views/error/error.component';
import { MyErrorHandler } from "./handlers/my-error-handler";
import { HomeComponent } from './views/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeIconComponent } from './components/icons/home-icon/home-icon.component';
import { InfoIconComponent } from './components/icons/info-icon/info-icon.component';
import { QrIconComponent } from './components/icons/qr-icon/qr-icon.component';
import { SingleClickIconComponent } from './components/icons/single-click-icon/single-click-icon.component';
import { DoubleClickIconComponent } from './components/icons/double-click-icon/double-click-icon.component';
import { ArrowLeftIconComponent } from './components/icons/arrow-left-icon/arrow-left-icon.component';
import { ArrowRightIconComponent } from './components/icons/arrow-right-icon/arrow-right-icon.component';
import { ArrowDownIconComponent } from './components/icons/arrow-down-icon/arrow-down-icon.component';
import { ArrowUpIconComponent } from './components/icons/arrow-up-icon/arrow-up-icon.component';
import { InfoComponent } from './components/info/info.component';
import { AudioOnIconComponent } from './components/icons/audio-on-icon/audio-on-icon.component';
import { AudioOffIconComponent } from './components/icons/audio-off-icon/audio-off-icon.component';
import { CrossIconComponent } from './components/icons/cross-icon/cross-icon.component';
import { SettingsComponent } from './views/settings/settings.component';
import { LightThemeIconComponent } from './components/icons/light-theme-icon/light-theme-icon.component';
import { DarkThemeIconComponent } from './components/icons/dark-theme-icon/dark-theme-icon.component';
import { FastIconComponent } from './components/icons/fast-icon/fast-icon.component';
import { SlowIconComponent } from './components/icons/slow-icon/slow-icon.component';
import { MagnifierMinusIconComponent } from './components/icons/magnifier-minus-icon/magnifier-minus-icon.component';
import { MagnifierPlusIconComponent } from './components/icons/magnifier-plus-icon/magnifier-plus-icon.component';
import { SettingsIconComponent } from './components/icons/settings-icon/settings-icon.component';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  override overrides = <any> {
    tap: { threshold: 5, posThreshold: 50 },
    swipe: { direction: Hammer.DIRECTION_ALL },
    // necessary for vertical scrolling
    // see https://shorturl.at/qvzPW
    pinch: { enable: false },
    rotate: { enable: false },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    QrScannerComponent,
    ReaderComponent,
    ErrorComponent,
    HomeComponent,
    LayoutComponent,
    MenuComponent,
    HomeIconComponent,
    InfoIconComponent,
    QrIconComponent,
    DoubleClickIconComponent,
    ArrowLeftIconComponent,
    ArrowRightIconComponent,
    ArrowDownIconComponent,
    ArrowUpIconComponent,
    InfoComponent,
    SingleClickIconComponent,
    AudioOnIconComponent,
    AudioOffIconComponent,
    CrossIconComponent,
    SettingsComponent,
    LightThemeIconComponent,
    DarkThemeIconComponent,
    FastIconComponent,
    SlowIconComponent,
    MagnifierMinusIconComponent,
    MagnifierPlusIconComponent,
    SettingsIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    importProvidersFrom(HammerModule),
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    },
    {
      provide: ErrorHandler,
      useClass: MyErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
