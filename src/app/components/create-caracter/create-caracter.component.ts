import { style } from '@angular/animations';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-caracter',
  templateUrl: './create-caracter.component.html',
  styleUrls: ['./create-caracter.component.css']
})
export class CreateCaracterComponent implements OnInit {

  @Output() faction : string = ''

  constructor() { }
  ngOnInit(): void {
  }

  getFaction(ref:string){
    this.faction = ref
  }

  outputTest() {
    console.log(this.faction)
  }
}
