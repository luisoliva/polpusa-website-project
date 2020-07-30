import { Component, OnInit } from '@angular/core';
import {BlogService} from "../services/blog.service";
import {ActivatedRoute} from "@angular/router";
import {Blog} from "../../../core/models/blog.model";
import {Utils} from "../../../core/utils";
import {Pagination} from "../../../core/models/pagination.model";
import {HttpClient} from "@angular/common/http";
import {CurrentLanguageService} from "../../../core/current-language.service";

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog:Blog;
  posts:Array<Blog> = new Array<Blog>();
  isLoading = false;
  location = ''

  constructor(private blogService:BlogService,
              private route: ActivatedRoute,
              private httpClient:HttpClient,
              public currentLanguage:CurrentLanguageService) {
    this.route.paramMap.subscribe(params => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.location = window.location.href;
    this.blogService.getBlogById(this.route.snapshot.params['id']).toPromise()
        .then(res=>this.blog = res)
    this.blogService.getRecommendedBlogs().toPromise()
        .then(res=>{
          this.posts = res.data;
        })
  }

  back(){
    Utils.goBack();
  }

  facebookShare(){
    this.openCenteredPopup('https://www.facebook.com/dialog/share?app_id=277871283515888&display=popup&href=' + this.location);
    return false;
  }

  linkedInShare(){
    this.openCenteredPopup('https://www.linkedin.com/sharing/share-offsite/?url=' + this.location)
  }

  twitterShare(){
    this.openCenteredPopup('https://twitter.com/intent/tweet?url=' + this.location)
  }

  openCenteredPopup(url:string){
    const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
    const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;

    const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const systemZoom = width / window.screen.availWidth;
    const left = (width - 600) / 2 / systemZoom + dualScreenLeft
    const top = (height - 600) / 2 / systemZoom + dualScreenTop
    const newWindow = window.open(url, "popup",
      `scrollbars=yes,
      width=${600 / systemZoom}, 
      height=${600 / systemZoom}, 
      top=${top}, 
      left=${left},
      `
    )
    if (window.focus) newWindow.focus();
  }
}
