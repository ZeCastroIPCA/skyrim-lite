import { Component, OnInit } from '@angular/core';
import { SkyrimService } from 'src/app/services/skyrim.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {

  constructor(private service : SkyrimService) { }

  ngOnInit(): void {
  }

  hour() {
    let date = new Date().toLocaleDateString();

    if (localStorage.yourapp_date == date) {
      return false;
    }

    localStorage.yourapp_date = date;
    return true;
  }

  train(element : HTMLHeadingElement){
    if(this.hour()){
      element.style.color="green"
      element.innerText="Success!"
      let hp = this.service.player.stats.health + 20;
      let dm = this.service.player.stats.damage + 20;
      let int = this.service.player.stats.inteligence + 20;
      let user = localStorage.getItem('user')
      let pass = localStorage.getItem('pass')
      let name = this.service.player.name
      this.service.updateFuncion(name, hp, dm, int, user, pass).subscribe((x) => {
        console.log(x['data']);
      });
    } else {
      element.style.color="crimson"
      element.innerText="You cannot train right now!"
    }
    element.style.display="block"
    setTimeout(() => {
      element.style.display="none"
    }, 3000);
  }
}
