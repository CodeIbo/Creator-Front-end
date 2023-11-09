import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/metaService.service';

@Component({
  selector: 'app-blog-private',
  templateUrl: './blog-private.component.html',
})
export class BlogPrivateComponent implements OnInit {

  constructor(private metaService:MetaService) {
    metaService.updateMetaInfo("Blog"," moim blogu dzielę się wskazówkami dotyczącymi lepszej komunikacji w różnych relacjach. Znajdziesz tam też moje przemyślenia, refleksje i teksty, które napisało moje życie.","Pani Komunikolog","komunikacja, rozmowa, porozumienie, relacje, komunikacja interpersonalna, lifestyle")
   }

  ngOnInit(): void {
  }

}
