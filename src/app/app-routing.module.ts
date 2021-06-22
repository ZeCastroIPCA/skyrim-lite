import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCaracterComponent } from './components/create-caracter/create-caracter.component';
import { CreditsComponent } from './components/credits/credits.component';
import { FightComponent } from './components/fight/fight.component';
import { ShowdownComponent } from './components/fight/showdown/showdown.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { OptionsComponent } from './components/options/options.component';
import { StatsPageComponent } from './components/stats-page/stats-page.component';
import { TrainingComponent } from './components/training/training.component';

const routes: Routes = [
  {path:"", component: MainMenuComponent},
  {path:"main-menu", component: MainMenuComponent},
  {path:"options", component: OptionsComponent},
  {path:"credits", component: CreditsComponent},
  {path:"create-caracter", component: CreateCaracterComponent},
  {path:"stats-page", component: StatsPageComponent},
  {path:"training", component: TrainingComponent},
  {path:"fight", component: FightComponent,
  children:[
    {path:":name", component: ShowdownComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
