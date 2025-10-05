import { Component, computed, ElementRef, inject, input, Input, InputSignal, viewChild } from '@angular/core';
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
  isActive: InputSignal<boolean> = input(false);

  private router: Router = inject(Router);

  titleLink = viewChild<ElementRef>('titleLink');
  titleUnderline = computed(() => this.titleLink()?.nativeElement?.children['underline']);
  
  public animateMouseEnter() {
    if (!this.isActive()) {
      gsap.to(this.titleUnderline(), {
        width: "80%"
      });
    } 
  }

  public animateMouseLeave() {
    if (!this.isActive()) {
      gsap.to(this.titleUnderline(), {
        width: "0%"
      });
    }
  }

  navigate() {
    this.router.navigateByUrl(this.pagePath, { replaceUrl: true })
  } 
}
