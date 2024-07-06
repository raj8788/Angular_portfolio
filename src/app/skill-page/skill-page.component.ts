import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-page',
  templateUrl: './skill-page.component.html',
  styleUrls: ['./skill-page.component.scss']
})
export class SkillPageComponent implements OnInit {
  skillsSection = {
    title: "What I do💁‍♂️",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
      "⚡ Creating application backend in Node, Express & Flask",
      "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks",
      "⚡ Integration of third party services such as Firebase/ Heroku/ AWS",
      "⚡ Experience of working with Computer Vision and NLP projects"
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
