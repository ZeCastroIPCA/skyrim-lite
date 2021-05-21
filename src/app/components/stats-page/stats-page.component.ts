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

  outputTest() {
    console.log(this.faction)
  }

}
