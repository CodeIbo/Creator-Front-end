import { Component, OnInit } from '@angular/core';
import { ApiCallback } from 'src/app/services/api-callback.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MetaService } from 'src/app/services/metaService.service';
import _ from 'lodash'

@Component({
  selector: 'app-blog-subsite',
  templateUrl: './blog-subsite.component.html',
  styleUrls: ['./blog-subsite.component.scss']
})
export class BlogSubsiteComponent implements OnInit {
  faSearch = faSearch
  search = '';
  lodash = _

  constructor(public apiResponse: ApiCallback, private metaService : MetaService) { 
    metaService.updateMetaInfo("Komunikacja Medyczna","Skuteczna komunikacja medyczna to ważny element leczenia. Dowiedz się, jak lepiej komunikować się w relacji lekarz pacjent. Poznaj wskazówki zarówno dla personelu medycznego, jak i dla pacjentów.","Pani Komunikolog","komunikacja medyczna, komunikacja kliniczna, lekarz, pacjent, choroba, relacja lekarz pacjent, choroba przewlekła, personel medyczny")
  }

  ngOnInit(): void {
    
    
  }

}
