import { Component, inject, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { Router, RouterModule } from '@angular/router';
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

  private router = inject(Router);
  

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

  navigate() {
    this.router.navigateByUrl(this.pagePath, { replaceUrl: true })
  } 
}
