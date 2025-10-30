import { Component, inject, Signal } from '@angular/core';
import { AdvertComponent } from "./ui/advert-component/advert-component";
import { MatDividerModule } from '@angular/material/divider';
import { AdvertisementService } from './data-access/advertisement-service';
import { Advertisement } from './data-access/models/advertisement-model';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BlogPostComponent } from "./ui/blog-post-component/blog-post-component";
import { PostService } from './data-access/post-service';
import { Post } from './data-access/models/post-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [AdvertComponent, MatDividerModule, MatCardModule, MatIconModule, BlogPostComponent]
})
export default class Home {
  advertisementService: AdvertisementService = inject(AdvertisementService);
  postService: PostService = inject(PostService);

  ads: Signal<Advertisement[] | undefined> = this.advertisementService.ads;
  posts: Signal<Post[] | undefined> = this.postService.posts;
}
