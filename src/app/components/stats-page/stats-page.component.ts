import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkyrimService } from 'src/app/services/skyrim.service';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.css']
})
export class StatsPageComponent implements OnInit {

  constructor(private service : SkyrimService, private route : Router) {
   }

  ngOnInit(): void {

  }

  healthNum : string = "50"
  damageNum : string = "30"
  inteligenceNum : string = "20"

  inputChangeHealth(input : string){
    this.healthNum = input
  }

  inputChangeStreght(input : string){
    this.damageNum = input
  }

  inputChangeInteligence(input : string){
    this.inteligenceNum = input
  }

  changeCharacter(ref : { src: string; }, img : HTMLImageElement){
    ref.src = 'assets/images/factions/' + img.className + '.png'
    this.service.player.img = ref.src
  }

  create(name : string, damage : string, inteligence : string, health : string, input : HTMLDivElement) {
    let user : string = localStorage.getItem("user")
    let pass : string = localStorage.getItem("pass")
    if(name != "") {
      this.service.createFuncion(name, health, damage, inteligence, user, pass).subscribe((x) => {
        if (x['code'] == 200) {
          console.log(x)
          this.route.navigate(["/fight"])
        }
      });
    } else {
      input.style.animation="shake-lr 0.7s cubic-bezier(0.455, 0.030, 0.515, 0.955) both"
      setTimeout(() => {
        input.style.animation="none"
      }, 700);
    }
    this.service.player.health = this.healthNum
    this.service.player.damage = this.damageNum
    this.service.player.inteligence = this.inteligenceNum

    localStorage.setItem('health', this.service.player.health)
    localStorage.setItem('damage', this.service.player.damage)
    localStorage.setItem('inteligence', this.service.player.inteligence)
    this.service.updateFuncion(name, health, damage, inteligence, user, pass)
  }
}
