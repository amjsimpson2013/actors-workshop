import { Component, OnInit } from '@angular/core';
import { time } from 'console';
import { gsap } from 'gsap';

@Component({
  selector: 'app-website-title-image-background',
  imports: [],
  templateUrl: './website-title-image-background.component.html',
  styleUrl: './website-title-image-background.component.scss'
})
export class WebsiteTitleImageBackgroundComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {
    let imageMask = document.querySelector('.image-mask') as Element;
    let timeline = gsap.timeline({paused: true, autoRemoveChildren: true});
    
    timeline
      .add(this.lightsDimAnimation(imageMask));

    timeline.play();
  }

  lightsDimAnimation(element: Element) {
    return gsap.to(
      element,
      {
        opacity: '90%',
        duration: 5
      },
    );
  }
}
