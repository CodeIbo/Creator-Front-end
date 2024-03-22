import { Component, OnInit } from '@angular/core';
import { ApiCallback } from 'src/app/services/api-callback.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MetaService } from 'src/app/services/metaService.service';
import _ from 'lodash'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  faSearch = faSearch
  search = '';
  lodash = _

  constructor(public apiResponse: ApiCallback, private metaService : MetaService) { 
    metaService.updateMetaInfo("Ułatwiam Komunikacje"," moim blogu dzielę się wskazówkami dotyczącymi lepszej komunikacji w różnych relacjach. Znajdziesz tam też moje przemyślenia, refleksje i teksty, które napisało moje życie.","Pani Komunikolog","komunikacja, rozmowa, porozumienie, relacje, komunikacja interpersonalna, lifestyle")
  }

  ngOnInit(): void {
    
    
  }

}
