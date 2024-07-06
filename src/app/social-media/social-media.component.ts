import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/raj8788/angular_portfolio",
    linkedin: "https://www.linkedin.com/in/raj-kumar-51064211a/",
    gmail: "rajkumar1996r@gmail.com",
    instagram : "",
    facebook: ""
  };
  constructor() { }

  ngOnInit(): void {
  }

}
