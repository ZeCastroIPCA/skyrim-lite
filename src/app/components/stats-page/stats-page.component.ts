import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.css']
})
export class StatsPageComponent implements OnInit {

  constructor() { }

  @Input() faction : string = ''

  ngOnInit(): void {

  }

  healthNum : string = "50"
  strenghtNum : string = "30"
  inteligenceNum : string = "20"

  inputChangeHealth(input : string){
    this.healthNum = input
  }

  inputChangeStreght(input : string){
    this.strenghtNum = input
  }

  inputChangeInteligence(input : string){
    this.inteligenceNum = input
  }

  changeCharacter(ref : { src: string; }, img : HTMLImageElement){
    ref.src = 'assets/images/factions/' + img.className + '.png'
}

}
