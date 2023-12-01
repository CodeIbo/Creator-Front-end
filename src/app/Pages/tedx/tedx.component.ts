import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/metaService.service';

@Component({
  selector: 'app-tedx',
  templateUrl: './tedx.component.html',
  styleUrls: ['./tedx.component.scss']
})
export class TedxComponent implements OnInit {

  constructor(private metaService:MetaService) {
    this.metaService.updateMetaInfo("Wystąpienie Tedx","21.11.2023 podczas TEDx Jagiellonian University opowiadałam o tym, jak ważna jest komunikacja niewerbalna i mowa ciała. Wystąpienia publiczne zawsze są stresujące, ale odpowiednie przygotowanie pozwala zmniejszyć tremę. Opowiem Ci, jak dobrze przygotować się do przemówień, występów publicznych i sprawić, by publiczność słuchała Cię z zaciekawieniem. Zostań ze mną i sprawdź, jak ja przygotowywałam się do TEDx","Klaudia Katarzyńska", "wstąpienie publiczne,  tedx, konferencja, przemówienie, mówca, wystąpienie, przemowa")
   }
  
  ngOnInit(): void {
  }

}