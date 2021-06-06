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
    console.log(this.faction)
  }


  //search for a solution
  checkIfChecked(checkbox : HTMLInputElement, coatOfArms : HTMLImageElement) {
    if (checkbox.checked) {
        //coatOfArms.style.filter ='drop-shadow(0px 0px 2vw rgb(255, 233, 182))'
        console.log("checked")
    }
  }

  outputTest() {
    console.log(this.faction)
  }
}
