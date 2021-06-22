import { Component, OnInit } from '@angular/core';
import { SkyrimService } from 'src/app/services/skyrim.service';

@Component({
  selector: 'app-create-caracter',
  templateUrl: './create-caracter.component.html',
  styleUrls: ['./create-caracter.component.css']
})
export class CreateCaracterComponent implements OnInit {

  constructor(private service : SkyrimService) { }
  ngOnInit(): void {
  }

  getFaction(ref : HTMLImageElement){
    switch(ref.alt){
      case "axe":
        this.service.player.faction = "Companions"
        this.service.player.stats.damage += 20
        this.service.player.stats.health -= 20
        break
      case "dagger":
        this.service.player.faction = "Thalmor"
        this.service.player.stats.inteligence += 20
        this.service.player.stats.damage -= 20
        break
      case "mace":
        this.service.player.faction = "Stormcloaks"
        this.service.player.stats.damage += 20
        this.service.player.stats.health -= 10
        this.service.player.stats.inteligence -= 10
        break
      case "sword":
        this.service.player.faction = "Winterhold"
        this.service.player.stats.damage += 10
        this.service.player.stats.health += 10
        break
      default:
        break
    }
    this.service.player.weapon = ref.src
    this.service.player.id = localStorage.getItem('id')
    console.log(this.service.player)
  }

}
