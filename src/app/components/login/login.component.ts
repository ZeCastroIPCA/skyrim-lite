import { Component, OnInit } from '@angular/core';
import { SkyrimService } from 'src/app/services/skyrim.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service : SkyrimService) { }

  ngOnInit(): void {
  }

  failed : boolean

  login(name : string, pass : string){
    this.service.loginFunction(name, pass).subscribe(x => {
      console.log(x['data'])
      if(x['data'] != false){
        localStorage.setItem('id', x['data'])
        localStorage.setItem('user', name)
        localStorage.setItem('pass', pass)
        localStorage.setItem('login', "1")
        window.location.reload()
      } else {
        this.failed = false
      }
    });
  }

  register(name : string, pass : string){
    this.service.registerFunction(name, pass).subscribe(x => console.log(x['data']));
    this.login(name, pass)
  }

}
