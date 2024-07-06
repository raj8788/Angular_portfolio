import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  greeting= {
    username: "Sarthak Agrawal",
    title: "Hi all, I'm Rajkumar",
    subTitle: "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / React js / Angular / Nodejs / python django / fast api / flask api / and some other cool libraries and frameworks.",
    resumeLink: "https://drive.google.com/file/d/1-Jr3ncAOp70-qc77zsRW0T0jtKUtZ2XD/view"
  }
}
