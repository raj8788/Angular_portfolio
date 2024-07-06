import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss']
})
export class EducationPageComponent implements OnInit {
  timeline = [
    {
      heading: "BE - Electrical and Electronics Engineering",
      duration: "2017",
      subtitle: "SMR CET, Thanjavur (Somanathapattinam)",
      content: "Successfully completed my BE in Electrical and Electronics Engineering",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Higher Secondary(12th)",
      duration: "2012",
      subtitle: "State Board Schools in Tamil Nadu",
      content: "Successfully completed my intermediate studies in 2012 from kattumavadi. Secondary Public School",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Secondary Stage(10th)",
      duration: "2010",
      subtitle: "State Board Schools in Tamil Nadu",
      content: "Successfully completed my high school studies in 2010 from kattumavadi",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
