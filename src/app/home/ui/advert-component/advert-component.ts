import { Component, input, InputSignal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { GCalAdvert } from '../../../shared/models/gcal-state';
import { Advertisement } from '../../data-access/models/advertisement-model';
import { MatAnchor, MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-advert-component',
  imports: [MatTabsModule, MatButtonModule, MatIconModule],
  providers: [],
  templateUrl: './advert-component.html',
  styleUrl: './advert-component.scss'
})
export class AdvertComponent {
  ads: InputSignal<Advertisement[] | undefined> = input();

  getImageUri(ad: Advertisement): string {
    return `/assets/${ad.imageName}.${ad.imageType}`;
  }
}
