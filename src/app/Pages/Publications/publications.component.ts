import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/metaService.service';

@Component({
  selector: 'app-podcast-spotify-subsite',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  constructor(private metaService:MetaService) {
    this.metaService.updateMetaInfo("Publikacje","Skuteczna komunikacja medyczna to ważny element leczenia. Dowiedz się, jak lepiej komunikować się w relacji lekarz pacjent. Poznaj wskazówki zarówno dla personelu medycznego, jak i dla pacjentów.","Pani Komunikolog","komunikacja, rozmowa, porozumienie, relacje, komunikacja interpersonalna, lifestyle")
   }
  
  ngOnInit(): void {
  }

}