import { Component, OnInit } from '@angular/core';
import { SkyrimService } from 'src/app/services/skyrim.service';

@Component({
  selector: 'app-showdown',
  templateUrl: './showdown.component.html',
  styleUrls: ['./showdown.component.css']
})
export class ShowdownComponent implements OnInit {

  skyrim : SkyrimService
  constructor(private service : SkyrimService) {
    this.skyrim = service
   }

  ngOnInit(): void {
  }

  reloadPage() : void {
    setTimeout(() => {
      window.location.reload()
    }, 100);
  }

}
