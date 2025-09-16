import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';



@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent implements OnInit {
constructor() {
    
  }

  ngOnInit() {
    document.fonts.onloadingdone = () => {
      let titleContainer = document.querySelector('.title') as Element;
      let timeline = gsap.timeline({paused: true, autoRemoveChildren: true});

      timeline
        .add(this.textRevealAnimation(titleContainer), "+=5");

      timeline.play(0);
    }
    
  }

  textRevealAnimation(element: Element) {
    let lineSplit = SplitText.create('.title', {type:"chars"});
    return gsap.from(
      lineSplit.chars,
      {
        rotationX: -100,
        transformOrigin: "50% 50% -160px",
        opacity: 0,
        duration: .5,
        ease: "power3",
        stagger: 0.1
      }
    );
  }
}
