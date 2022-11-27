import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallback } from 'src/app/services/api-callback.service';

@Component({
  selector: 'app-single-blog-post',
  templateUrl: './single-blog-post.component.html',
  styleUrls: ['./single-blog-post.component.scss']
})
export class SingleBlogPostComponent implements OnInit {
  id:any;
  article: any;
  constructor(public _route: ActivatedRoute,public _apiCallback: ApiCallback) {
    this.id = this._route.snapshot.paramMap.get("id")
   }

  ngOnInit(): void {
   this._apiCallback.getApi().forEach(element => {
    if(element.id.toString() === this.id){
      this.article = element
    } 
   });
  }

}
