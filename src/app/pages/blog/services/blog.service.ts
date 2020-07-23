import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {DatePipe} from "@angular/common";
import {ApiService} from "../../../shared/services/api.service";
import {TranslationBlog} from "../../../core/models/translation-blog.model";
import {Utils} from "../../../core/utils";
import {Blog} from "../../../core/models/blog.model";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private api:ApiService,
              private datePipe:DatePipe) { }

  getBlogs():Observable<any>{
    return this.api.get('v1/api/blog-translation/');
  }

  getBlogsByPage(page:number):Observable<any>{
    return this.api.get('v1/api/blog-translation/?page='+page);
  }

  getBlogById(id:number | string):Observable<any>{
    return this.api.get('v1/api/blog-translation/'+id+'/');
  }

  deleteBlogById(id):Observable<any>{
    return this.api.delete('v1/api/blog/'+id+'/');
  }

  updateTranslationBlog(translationBlog:TranslationBlog):Observable<any>{
    let requestData = Utils.cloneObject(translationBlog)
    let id = requestData.id;
    delete requestData.id;
    return this.api.put('v1/api/translation-blog/'+id+'/',requestData);
  }

  updateBlog(blog:Blog):Observable<any>{
    let requestData = Utils.cloneObject(blog)
    let id = requestData.id;
    requestData.date = this.datePipe.transform(blog.date,'yyyy-MM-dd').toString()
    requestData.image = blog.image;
    if (!(blog.image instanceof File)){
      delete requestData.image;
    }
    delete requestData.blog
    delete requestData.id;
    return this.api.uploadBlog('v1/api/blog/'+id+'/',requestData);
  }

  createBlog(blog:Blog):Observable<any>{
    let request = Utils.cloneObject(blog)
    delete request.blog;
    delete request.id;
    request.date = this.datePipe.transform(blog.date,'yyyy-MM-dd').toString()
    request.image = blog.image;
    return this.api.createBlog('v1/api/blog/', request);
  }

  createTranslationBlog(translationBlog:TranslationBlog){
    let request = Utils.cloneObject(translationBlog)
    delete request.id;
    return this.api.post('v1/api/translation-blog/', request);
  }


}
