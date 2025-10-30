import { HttpClient } from '@angular/common/http';
import { DestroyRef, inject, Injectable, linkedSignal } from '@angular/core';
import { rxResource, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map, Observable } from 'rxjs';
import { Post } from './models/post-model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'api/posts';

  httpClient: HttpClient = inject(HttpClient);
  destroyRef: DestroyRef = inject(DestroyRef);

  public loadedPosts = rxResource({stream: () => this.FetchPosts()});

  posts = linkedSignal({
    source: this.loadedPosts.value,
    computation: (posts) => posts ?? []
  });

  private FetchPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url).pipe(
      takeUntilDestroyed(this.destroyRef),
      map((response) => { return response ?? [] })
    );
  }
}
