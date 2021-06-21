import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkyrimService {

  constructor(private http : HttpClient) { }

  player : any = {
    id: "",
    name: "ze",
    faction: "Companions",
    stats: {
      health: 100,
      damage: 100,
      inteligence: 100
    },
    img: "assets/images/factions/cha2.png",
    weapon: "assets/images/weapons/2.png"
  }

  enemy : any = {
    id: "",
    idPersonagem: "",
    name: "",
    faction: "",
    stats: {
      health: 1,
      damage: 1,
      inteligence: 1
    },
    img: "",
    weapon: ""
  }

  register : string = "http://moreiramoises.pt/server/apis/signup.php"

  registerFunction(name : string, pass : string){
    let bodyData: FormData = new FormData()
    bodyData.append("username", name)
    bodyData.append("password", pass)

    return this.http.post(this.register, bodyData)
  }

  login : string = "http://moreiramoises.pt/server/apis/login.php"

  loginFunction(name : string, pass : string){
    let bodyData: FormData = new FormData()
    bodyData.append("username", name)
    bodyData.append("password", pass)

    return this.http.post(this.login, bodyData)
  }

  linkCreate: string = 'http://moreiramoises.pt/server/apis/createChart.php';

  createFuncion(name : string, health : string, damage : string, inteligence : string, user : string, pass : string) {
    let data: FormData = new FormData()

    data.append('name', name)
    data.append('atk', damage)
    data.append('isMonster', 'false')
    data.append('int', inteligence)
    data.append('vida', health)
    data.append('username', user)
    data.append('password', pass)

    return this.http.post(this.linkCreate, data)
  }

  linkUpdate: string = 'http://moreiramoises.pt/server/apis/updateChart.php'

  updateFuncion(name : string, health : string, damage : string, inteligence : string, user : string, pass : string) {
    let data: FormData = new FormData()

    data.append('name', name)
    data.append('atk', damage)
    data.append('isMonster', 'false')
    data.append('int', inteligence)
    data.append('vida', health)
    data.append('username', user)
    data.append('password', pass)

    return this.http.post(this.linkUpdate, data)
  }

  linkDelete: string = 'http://moreiramoises.pt/server/apis/deleteChart.php'

  deleteFuncion(id : string, user : string, pass : string) {
    let data: FormData = new FormData()

    data.append('idPersonagem', id)
    data.append('username', user)
    data.append('password', pass)

    return this.http.post(this.linkDelete, data)
  }

  linkGetID : string = "http://moreiramoises.pt/server/apis/get/getChar.php"

  getID(id : string){
    return this.http.get(this.linkGetID, {
      params: {'PlayerID': id}
    })
  }

  linkRandomID : string = "http://moreiramoises.pt/server/apis/get/getRandomChar.php?"

  getRandomID() {
    return this.http.get(this.linkRandomID);
  }
}
