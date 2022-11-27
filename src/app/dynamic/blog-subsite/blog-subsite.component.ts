import { Component, OnInit } from '@angular/core';
import { ApiCallback } from 'src/app/services/api-callback.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog-subsite',
  templateUrl: './blog-subsite.component.html',
  styleUrls: ['./blog-subsite.component.scss']
})
export class BlogSubsiteComponent implements OnInit {
  faSearch = faSearch
  search = '';

  constructor(public _apiResponse: ApiCallback) { }

  ngOnInit(): void {
    
    
  }

}
