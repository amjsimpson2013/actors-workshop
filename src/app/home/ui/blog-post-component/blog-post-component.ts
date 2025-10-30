import { Component, effect, input, InputSignal } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { Post } from '../../data-access/models/post-model';
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'app-blog-post-component',
  imports: [MatCardModule, MatDivider],
  templateUrl: './blog-post-component.html',
  styleUrl: './blog-post-component.scss'
})
export class BlogPostComponent {
  posts: InputSignal<Post[] | undefined> = input();

  constructor()
  {
    effect(() => this.posts()?.forEach((post) => post.formattedDate = this.getFormattedDate(post.createdDate)) )
  }

  getFormattedDate(date: Date) {
    const formatDate: Date = new Date(date);
    if (formatDate === undefined) return '';
    return formatDate.toDateString();
  }
}
