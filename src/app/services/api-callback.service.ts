import { Injectable } from "@angular/core";
import apiTest from "../data/example-data";


@Injectable({ providedIn: 'root' })
export class ApiCallback {
    
    getApi(){
        return apiTest
    }
}

