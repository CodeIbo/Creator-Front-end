import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/metaService.service';

@Component({
  selector: 'app-szkolenia-kom-med',
  templateUrl: './szkolenia-kom-med.component.html',
  styleUrls: ['./szkolenia-kom-med.component.scss'],
})
export class SzkoleniaComMed implements OnInit {
  galleryItems = [
    {
      img: '/../../assets/img/publikacje/SzkoleniazKomMed/cert-maj.jpg',
      txt: 'IBD Day w Krakowie organizowanym przez Towarzystwo ,,J-elita’’ w maju 2023 r.',
      alt: 'Certyfikat IBD Day w Krakowie organizowanym przez Towarzystwo ,,J-elita’’ w maju 2023 r.',
    },
    {
      img: '../../../assets/img/publikacje/SzkoleniazKomMed/cert-listopad.jpg',
      txt: 'Dnia Edukacji o NZJ organizowanym przez Towarzystwo ,,J-elita’’ w listopadzie 2023 r.',
      alt: 'Certyfikat Dnia Edukacji o NZJ organizowanym przez Towarzystwo ,,J-elita’’ w listopadzie 2023 r.',
    },
  ];
  constructor(private metaService: MetaService) {
    this.metaService.updateMetaInfo(
      'Szkolenia z Komunikacji Medycznej',
      'Prowadzę warsztaty z zakresu komunikacji medycznej dla pacjentów. Pomagam lepiej porozumiewać się z personelem medycznym. Zapraszam do zapoznania się z ofertą.',
      'Klaudia Katarzyńska',
      'Komunikacja, komunikacja medyczna, warsztaty, warsztaty NGO, NGO'
    );
  }
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    dots: true,
    infinite: true,
  };

  ngOnInit(): void {}
}
