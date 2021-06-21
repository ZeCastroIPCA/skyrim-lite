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

  getFaction(ref:string){
    this.service.player.faction = ref
    this.service.player.id = localStorage.getItem('id')
  }
}
