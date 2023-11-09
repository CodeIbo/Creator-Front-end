import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/metaService.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private metaService: MetaService
  ) { 
    this.metaService.updateMetaInfo("Strona Główna","Opowiadam o tym, jak skutecznie się dogadywać w różnych relacjach. Zapraszam","Pani Komunikolog","komunikacja, komunikacjamedyczna, rozmowa, relacje, dialog, komunikat")
  }

  ngOnInit(): void {
    
  }

}
