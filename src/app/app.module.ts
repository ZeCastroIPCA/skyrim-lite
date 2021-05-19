import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { CreditsComponent } from './components/credits/credits.component';
import { CreateCaracterComponent } from './components/create-caracter/create-caracter.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    CreditsComponent,
    CreateCaracterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
