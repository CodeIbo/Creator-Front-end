import { Injectable } from "@angular/core";



@Injectable({ providedIn: 'root' })
export class scrollService {

    
    scroll = (el:any) =>{
        document.querySelector(el).scrollIntoView({behavior: "smooth",block:"start"})
    }
}

