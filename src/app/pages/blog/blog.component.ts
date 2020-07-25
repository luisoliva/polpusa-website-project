import { Component, OnInit } from '@angular/core';
import {BlogService} from "./services/blog.service";
import {Blog} from "../../core/models/blog.model";
import {Pagination} from "../../core/models/pagination.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: Blog[] = [];
  pagination:Pagination;
  isLoading = false;

  constructor(private blogService:BlogService,
              private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.blogService.getBlogs().toPromise()
        .then(res=>{
          this.posts = res.data;
          this.pagination = res.pagination;
        })
  }

  loadMoreBlogs() {
    this.isLoading = true;
    this.httpClient.get(this.pagination.links.next).toPromise()
        .then((res:any)=>{
          this.posts = this.posts.concat(res.data);
          this.pagination = res.pagination;
        })
        .finally(()=> {
          setTimeout(()=>{
            this.isLoading = false
          },500)
        })
  }
}
