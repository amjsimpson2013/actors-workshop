import { Component, inject, Signal } from '@angular/core';
import { AdvertComponent } from "./ui/advert-component/advert-component";
import { MatDividerModule } from '@angular/material/divider';
import { GCalAdvert } from '../shared/models/gcal-state';
import { GcalService } from '../shared/data-access/gcal-service';
import { AdvertisementService } from './data-access/advertisement-service';
import { Advertisement } from './data-access/models/advertisement-model';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [AdvertComponent, MatDividerModule, MatCardModule, MatIconModule]
})
export default class Home {
  advertisementService: AdvertisementService = inject(AdvertisementService);

  ads: Signal<Advertisement[] | undefined> = this.advertisementService.ads;
}
