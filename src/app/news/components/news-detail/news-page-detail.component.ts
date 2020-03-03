import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewsPost } from 'src/app/shared/services/news/models/news.models';
import { NewsService } from 'src/app/shared/services/news/news.service';
import { Meta } from '@angular/platform-browser';

@Component({
  templateUrl: './news-page-detail.component.html',
  styleUrls: ['./news-page-detail.component.scss']
})
export class NewsPageDetailComponent implements OnInit, OnDestroy {
  newsPost: NewsPost;
  @ViewChild('bottom', { static: true }) bottom: ElementRef;
  detailSubscription: Subscription;
  /**
   *
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService,
    private meta: Meta
  ) { }
  ngOnInit(): void {
    this.detailSubscription = this.newsService
      .get(this.activatedRoute.snapshot.params.slug)
      .subscribe(post => {
        this.newsPost = post
        this.meta.addTag({ property: 'og:url', content: 'https://haidong-kids.herokuapp.com/noticias/detalle/' + this.newsPost.slug })
        this.meta.addTag({ property: 'og:type', content: 'website' })
        this.meta.addTag({ property: 'og:title', content: this.newsPost.title })
        this.meta.addTag({ property: 'og:description', content: this.newsPost.shortDesc })
        this.meta.addTag({ property: 'og:image', content: this.newsPost.mainImg })


      });
  }
  scrollToBottom() {
    this.bottom.nativeElement.scrollIntoView({
      block: 'end',
      behavior: 'smooth'
    });
  }
  ngOnDestroy(): void {
    console.log('Destroy');
    if (this.detailSubscription) {
      this.detailSubscription.unsubscribe();
    }
  }
}
