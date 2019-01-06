import { PostDetailGuard } from './posts/post-detail.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list.component';
import { StarComponent } from './shared/star.component';
import { PostDetailComponent } from './posts/post-detail.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { HomepageComponent } from './home/homepage.component';
import { AboutComponent } from './about/about.component';
import { TruncatePipe } from './posts/TruncatePipe';
import { Youtube } from './posts/youtube';
import { FeedbackComponent } from './customer/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    StarComponent,
    PostDetailComponent,
    HomepageComponent,
    AboutComponent,
    TruncatePipe,
    Youtube,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'posts', component: PostListComponent },
      { path: 'posts/:id',
        canActivate: [ PostDetailGuard ],
        component: PostDetailComponent },
      { path: 'homepage', component: HomepageComponent },
      { path: 'about', component: AboutComponent},
      { path: 'feedback', component: FeedbackComponent },
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      { path: '**', redirectTo: 'homepage', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
