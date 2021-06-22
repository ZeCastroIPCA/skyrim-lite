import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { CreditsComponent } from './components/credits/credits.component';
import { CreateCaracterComponent } from './components/create-caracter/create-caracter.component';
import { StatsPageComponent } from './components/stats-page/stats-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { TrainingComponent } from './components/training/training.component';
import { FightComponent } from './components/fight/fight.component';
import { OptionsComponent } from './components/options/options.component';
import { ShowdownComponent } from './components/fight/showdown/showdown.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    CreditsComponent,
    CreateCaracterComponent,
    StatsPageComponent,
    LoginComponent,
    TrainingComponent,
    FightComponent,
    OptionsComponent,
    ShowdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
