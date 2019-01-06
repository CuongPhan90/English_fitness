import { Component, OnInit } from '@angular/core';
import { IPost } from '../posts/post';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../posts/post.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  pageTitle = 'Latest Posts';
  errorMessage: string;

  filterPosts: IPost[] = [];
  posts: IPost[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      posts => {
        this.posts = posts;
        this.filterPosts = posts.filter((post: IPost) => post.postId < 4);
      },
      error => this.errorMessage = <any>error
    );
  }

}
