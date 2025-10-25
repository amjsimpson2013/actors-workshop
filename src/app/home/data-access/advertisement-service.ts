import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable, linkedSignal } from '@angular/core';
import { rxResource, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map, Observable } from 'rxjs';
import { Advertisement } from './models/advertisement-model';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  private url = 'api/advertisements';

  httpClient: HttpClient = inject(HttpClient);
  destroyRef: DestroyRef = inject(DestroyRef);

  public loadedAds = rxResource({stream: () => this.FetchTodaysAds()});

  ads = linkedSignal({
    source: this.loadedAds.value,
    computation: (ads) => ads ?? []
  });

  private FetchTodaysAds(): Observable<Advertisement[]> {
    return this.httpClient.get<Advertisement[]>(this.url).pipe(
      takeUntilDestroyed(this.destroyRef),
      map((response) => { return response ?? []})
    );
  }
}
