import { Component, OnInit } from '@angular/core';
import { SkyrimService } from 'src/app/services/skyrim.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor(private service : SkyrimService) { }

  ngOnInit(): void {
  }

  deleteID(id : HTMLInputElement, conf : HTMLHeadingElement) : void {
    let user : string = localStorage.getItem("user")
    let pass : string = localStorage.getItem("pass")
    this.service.deleteFuncion(user, pass, id.value).subscribe((x) => {
      if (x['code'] == 200) {
        conf.style.color="green"
        conf.innerText="Success!"
        conf.style.display="block"
      } else {
        conf.style.color="crimson"
        conf.innerText="ID not found!"
        conf.style.display="block"
      }
      id.disabled = true
      setTimeout(() => {
        id.disabled = false
        conf.style.display="none"
      }, 3000);
      console.log(x)
    });
  }

}
