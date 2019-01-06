import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PostService } from './post.service';
import { IPost } from './post';

@Component({
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  errorMessage = '';
  post: IPost | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private postService: PostService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getPost(id);
    }
  }

  getPost(id: number) {
    this.postService.getPost(id).subscribe(
      post => this.post = post,
      error => this.errorMessage = <any>error
    );
  }

  onBack(): void {
    this.router.navigate(['/posts']);
  }
}
