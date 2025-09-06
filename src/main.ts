import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, SplitText);
}

