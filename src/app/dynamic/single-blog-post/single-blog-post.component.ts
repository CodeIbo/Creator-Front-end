import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallback } from 'src/app/services/api-callback.service';
import { MetaService } from 'src/app/services/metaService.service';

@Component({
  selector: 'app-single-blog-post',
  templateUrl: './single-blog-post.component.html',
  styleUrls: ['./single-blog-post.component.scss']
})
export class SingleBlogPostComponent {
  id:any;
  article: any;
  constructor(public _route: ActivatedRoute,public _apiCallback: ApiCallback, private metaService: MetaService) {
    this.id = this._route.snapshot.paramMap.get("id")
    this._apiCallback.getApi('komunikacjaMedyczna').forEach(element => {
      if(element.post_url === this.id){
        this.article = element
        this.metaService.updateMetaInfo(element.meta_data_title,element.meta_data_description,element.post_author,element.keywords)
      } 
     });
   }

}
