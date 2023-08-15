import { APP_INITIALIZER, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { FooterComponent } from './modules/footer/footer.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { HomeComponent } from './modules/layouts/home/home.component';
import { SharedModule } from 'src/shared/shared.module';
import { registerLocaleData } from '@angular/common';
import localeRu from "@angular/common/locales/ru";
import { NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';
import { AppInitService } from './core/local-services/appInitService/app-init-service.service';
import { LanguageComponent } from './core/language/language.component';
import { FindLanguageFromKeyPipe } from './core/language/find-language-from-key.pipe';

registerLocaleData(localeRu);

export function initializeApp(appInitService: AppInitService) {
  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
      appInitService.init();
      resolve(true);
    });
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LanguageComponent,
    FindLanguageFromKeyPipe,
  ],
  imports: [
    BrowserModule,
    SharedModule,

  ], schemas: [NO_ERRORS_SCHEMA],
  providers: [
    { provide: NZ_I18N, useValue: ru_RU },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInitService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
