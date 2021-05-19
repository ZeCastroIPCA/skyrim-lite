import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCaracterComponent } from './components/create-caracter/create-caracter.component';
import { CreditsComponent } from './components/credits/credits.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

const routes: Routes = [
  {path:"", component: MainMenuComponent},
  {path:"main-menu", component: MainMenuComponent},
  {path:"credits", component: CreditsComponent},
  {path:"create-caracter", component: CreateCaracterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
