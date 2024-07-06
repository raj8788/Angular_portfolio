import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.scss']
})
export class HeaderPageComponent implements OnInit {
@ViewChild('home') homeId! : ElementRef
@ViewChild('skill') skillId! : ElementRef
@ViewChild('education') educationId : ElementRef
@ViewChild('project') projectId : ElementRef
@ViewChild('contact') contactId : ElementRef
  constructor() { }

  ngOnInit(): void {
  }
  // scrollToElement(element : ElementRef){
  //   element.nativeElement?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  // }
  scrollToElement(element: ElementRef, offset: number = 0): void {
    const elementPosition = element.nativeElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
