import { Component } from "@angular/core";
import { MetaService } from "src/app/services/metaService.service";

@Component({
    selector:'app-main-section',
    styleUrls: ['./main-section.component.scss'],
    templateUrl:'./main-section.component.html'
    
})
export class MainSection {
    constructor(
        private metaService: MetaService
    ){
        
    }

}

