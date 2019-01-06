import { TestBed, async, inject } from '@angular/core/testing';

import { PostDetailGuard } from './post-detail.guard';

describe('PostDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostDetailGuard]
    });
  });

  it('should ...', inject([PostDetailGuard], (guard: PostDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
