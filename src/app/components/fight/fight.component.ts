import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SkyrimService } from 'src/app/services/skyrim.service';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent implements OnInit {

  skyrim : SkyrimService
  constructor(private service : SkyrimService, private renderer : Renderer2) {
    this.skyrim = service
   }

   @ViewChild("playerImg") playerImage : any
   @ViewChild("enemyImg") enemyImage : any

   @ViewChild("playerWeapon") playerWeapon : any
   @ViewChild("enemyWeapon") enemyWeapon : any



  ngOnInit(): void {
    setTimeout(() => {
      this.playerImage.nativeElement.src = this.service.player.img
      this.enemyImage.nativeElement.src = "assets/images/factions/cha" + (Math.floor(Math.random() * 4)+ 1) + ".png"
      this.playerWeapon.nativeElement.src = this.service.player.weapon
      this.renderer.setStyle(this.playerWeapon.nativeElement, "transform", "scaleX(-1)");
      this.enemyWeapon.nativeElement.src = "assets/images/weapons/" + (Math.floor(Math.random() * 4)+ 1) + ".png"
      this.getEnemyFaction()
      this.getRandomEnemy()
    }, 200);
    this.getPlayer(localStorage.getItem("id"), 0)
  }

  getEnemyFaction() : void{
    let factions : string[] = ['Companions', 'Thalmor', 'Stormcloaks', 'Winterhold']
    this.service.enemy.faction = factions[Math.floor(Math.random() * 3)+ 1]
    this.service.player.faction = factions[Math.floor(Math.random() * 3)+ 1]
    console.log(this.service.enemy.faction)
  }

  getPlayer(id : string, idPersonagem : number) : void{
    this.service.getID(id).subscribe((x) => {
      if (x['code'] == 200) {
        this.service.player.id = x['data'].Personagens[idPersonagem].ID
        this.service.player.idPersonagem = x['data'].Personagens[idPersonagem].ID_Player
        this.service.player.name = x['data'].Personagens[idPersonagem].Nome
        this.service.player.stats.health = x['data'].Personagens[idPersonagem].Vida
        this.service.player.stats.damage = x['data'].Personagens[idPersonagem].Atk
        this.service.player.stats.inteligence = x['data'].Personagens[idPersonagem].Int
      }
      console.log(x)
    });
  }

  getRandomEnemy() : void{
    this.service.getRandomID().subscribe((x) => {
      if (x['code'] == 200) {
        this.service.enemy.id = x['data'].ID
        this.service.enemy.idPersonagem = x['data'].ID_Player
        this.service.enemy.name = x['data'].Nome
        this.service.enemy.stats.health = x['data'].Vida
        this.service.enemy.stats.damage = x['data'].Atk
        this.service.enemy.stats.inteligence = x['data'].Int
      }
      console.log(x)
    });
  }

  getEnemy(id : string) : void{
    this.service.getID(id).subscribe((x) => {
      if (x['code'] == 200) {
        this.service.enemy.id = x['data'].Personagens[0].ID
        this.service.enemy.idPersonagem = x['data'].Personagens[0].ID_Player
        this.service.enemy.name = x['data'].Personagens[0].Nome
        this.service.enemy.stats.health = x['data'].Personagens[0].Vida
        this.service.enemy.stats.damage = x['data'].Personagens[0].Atk
        this.service.enemy.stats.inteligence = x['data'].Personagens[0].Int
      }
      console.log(x)
    });
  }

  getDamage() : string{
    let ran : number = Math.floor(Math.random() * 3)
    let result : string = ""
    switch(ran){
      case 0:
        result = 'failed'
        break
      case 1:
        result = 'attack'
        break
      default:
        result = 'critical'
        break
    }
    return result
  }

  dead() : void{
    let time : any = setInterval(()=> {
      if(this.service.enemy.stats.health > 0 && this.service.player.stats.health > 0) {
        this.attack()
      } else {
        window.clearInterval(time);
        if(this.service.player.stats.health < 0){
          this.service.score = this.service.enemy.name
          console.log(this.service.score)
        } else {
          this.service.score = this.service.player.name
          console.log(this.service.score)
        }
      }
    },1000)
  }

  @ViewChild("arrow") arrow : any
  count : number = 0

  attack() : void{
    if (this.count % 2 == 0) {
      this.renderer.setStyle(this.arrow.nativeElement, "transform", "scaleX(1) translate(-50%, -50%) rotate(45deg)")
    } else {
      this.renderer.setStyle(this.arrow.nativeElement, "transform", "scaleX(-1) translate(50%, -50%) rotate(45deg)")
    }
    if(this.getDamage() == 'failed'){
      console.log("failed attack")
    } else if(this.getDamage() == 'attack'){
      if (this.count % 2 == 0) {
        this.service.enemy.stats.health -= this.service.player.stats.damage
      } else {
        this.service.player.stats.health = this.service.player.stats.health
      }
      console.log("attack")
    } else if(this.getDamage() == 'critical'){
      if (this.count % 2 == 0) {
        this.service.enemy.stats.health -= (this.service.player.stats.damage + (this.service.player.stats.inteligence / 4))
      } else {
        this.service.player.stats.health -= (this.service.enemy.stats.damage + (this.service.enemy.stats.inteligence / 4))
      }
      console.log("critical attack")
    }
    this.count++
  }
}
