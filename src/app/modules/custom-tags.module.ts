import { NgModule } from '@angular/core';
// import { CustomTagsService } from '@services/custom-tags.service';
import { SliderComponent } from '../components/slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SliderComponent],
  imports: [SlickCarouselModule, CommonModule],
  entryComponents: [],
  // providers: [CustomTagsService],
  bootstrap: [CustomTagsModule],
})
export class CustomTagsModule {
  // constructor(private CustomTagsService: CustomTagsService) {
  //   this.CustomTagsService.initializeCustomTags([
  //     { component: SliderComponent, selector: 'app-slider' },
  //   ]);
  // }
}
