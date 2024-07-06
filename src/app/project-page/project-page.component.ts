import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  data = [
    {proName:'Radio coins',duration:'03/06/2022 - 12/01/2023',tech:['angular','python','mysql']},
    {proName:'FlixGo', duration:'20/01/2023  - 07/08/2023', tech:['vue','django','mysql']},
    {proName:'Crizal', duration:'24/08/2023  - 010/02/2024', tech:['React','fastapi','mysql',]},
    {proName:'shopping', duration:'17/03/2023  - till', tech:['Node js','React','mysql']},
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    margin: 10,
    navSpeed: 700,
    autoHeight:true,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
