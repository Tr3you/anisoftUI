import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { MenuModule } from './shared/components/menu/menu.module';
import { HeaderModule } from './shared/components/header/header.module';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MenuModule,
    HeaderModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
