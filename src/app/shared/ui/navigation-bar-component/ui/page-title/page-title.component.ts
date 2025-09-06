import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-page-title',
  imports: [MatDividerModule, RouterModule],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss'
})
export class PageTitleComponent {
  @Input() extend: boolean = false;
  @Input() pageTitle: string = "";
  @Input() pagePath: string = "";

  animateMouseEnter(event: any) {
    const pageTitleElement = event.target as Element;
    const underline = pageTitleElement.querySelector(".page-title-underline");
    
    gsap.to(underline, {
      width: "50%",
      duration: 1
    });
  }

  animateMouseLeave(event: any) {
    const pageTitleElement = event.target as Element;
    const underline = pageTitleElement.querySelector(".page-title-underline");
    
    gsap.to(underline, {
      width: "0%",
      duration: 1
    });
  }
}
