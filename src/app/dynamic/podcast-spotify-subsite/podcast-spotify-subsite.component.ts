import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/metaService.service';

@Component({
  selector: 'app-podcast-spotify-subsite',
  templateUrl: './podcast-spotify-subsite.component.html',
  styleUrls: ['./podcast-spotify-subsite.component.scss']
})
export class PodcastSpotifySubsiteComponent implements OnInit {

  constructor(private metaService: MetaService) { 
    this.metaService.updateMetaInfo("Podcasty","Posłuchaj moich wskazówek dotyczących tego, jak skutecznie się komunikować. O komunikacji opowiadam sama na przykładach z mojego życia, ale również zapraszam do rozmowy gości z zakresu różnych dziedzin.","Pani Komunikolog","komunikacja, rozmowa, podcast o komunikacji, komunikat, relacje, komunikacja medyczna, komunikacja interpersonalna")
  }

  ngOnInit(): void {
  }

}
