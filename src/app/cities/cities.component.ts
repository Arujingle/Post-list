import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: Array <{name: string, type: string}> = [
   { name: 'Almaty',
      type: 'city',
  },
  {
     name : 'Astana',
     type : 'capital',

  },
  {
    name: 'Shymkent',
    type: 'oblast'
  }
];


  constructor() { }

  ngOnInit() {
  }


}
