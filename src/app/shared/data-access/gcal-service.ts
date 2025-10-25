import { DestroyRef, inject, Injectable, linkedSignal } from '@angular/core';
import { GCalAdvert, GCalState } from '../models/gcal-state';
import { map, Observable, take, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { rxResource, takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class GcalService {
  private eventsUrl = 'api/events';

  httpClient: HttpClient = inject(HttpClient);
  destroyRef: DestroyRef = inject(DestroyRef);
  
  private state: GCalState = {
    loading: false,
    ads: [],
    error: undefined
  };
  
  // private fetchAds = this.GetGCalAdEvents().pipe(
  //   takeUntilDestroyed(this.destroyRef),
  //   tap(() => this.state.loading = true),
  //   map((response) => { return response ?? [] }),
  //   tap(() => this.state.loading = false)
  // );

  public loadedAds = rxResource({stream: () => this.GetGCalAdEvents()});

  ads = linkedSignal({
    source: this.loadedAds.value,
    computation: (ads) => ads ?? []
  });

  private GetGCalAdEvents(): Observable<GCalAdvert[]> {
    return this.httpClient.get<GCalAdvert[]>(this.eventsUrl + '/getEventAds').pipe(
      takeUntilDestroyed(this.destroyRef),
      map((response) => {return response ?? []})
    );
  }
}
