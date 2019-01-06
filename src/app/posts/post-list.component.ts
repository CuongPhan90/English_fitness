import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';
import { IPost } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {
    pageTitle = 'Post List';
    imageWidth = 200;
    imageMargin = 2;
    // showPosts = true;
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string) {
      this._listFilter = value;
      this.filterPosts = this.listFilter ? this.performFilter(this.listFilter) : this.posts;
    }


    filterPosts: IPost[] = [];
    swiperPosts: IPost[] = [];
    posts: IPost[] = [];

    constructor(private postService: PostService) {
    }

    onRatingClicked(message: string): void {
      this.pageTitle = 'Post List: ' + message;
    }

    performFilter(filterBy: string): IPost[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.posts.filter((post: IPost) => post.postTitle.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    // toggleImage(): void {
    //   this.showPosts = !this.showPosts;
    // }

    ngOnInit(): void {
      this.postService.getPosts().subscribe(
        posts => {
          this.posts = posts,
          this.swiperPosts = posts.filter((post: IPost) => post.postId < 4); // Make it random posts later
          this.filterPosts = posts.filter((post: IPost) => post.postId);
        },
        error => this.errorMessage = <any>error
      );
    }
}
