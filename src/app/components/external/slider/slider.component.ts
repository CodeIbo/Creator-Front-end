import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  configSlider = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    dots: true,
    infinite: true,
  };
  @Input() galleryItems: any = [
    {
      img: '',
      alt: '',
      txt: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
