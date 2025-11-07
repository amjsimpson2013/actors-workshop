import { Component } from '@angular/core';
import { MatCard, MatCardContent } from "@angular/material/card";

@Component({
  selector: 'app-about',
  imports: [MatCard, MatCardContent],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export default class About { }
