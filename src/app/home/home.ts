import { Component } from '@angular/core';
import { AdvertComponent } from "./ui/advert-component/advert-component";
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [AdvertComponent, MatDividerModule]
})
export default class Home {

}
