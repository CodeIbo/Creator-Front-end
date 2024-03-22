import { Injectable } from "@angular/core";
import apiTest from "../data/data.json";

type ApiKeys = "komunikacjaMedyczna" | "ulatwiamKomunikacje"


@Injectable({ providedIn: 'root' })
export class ApiCallback {
    
    getApi(key:ApiKeys){
        return apiTest[`${key}`]
    }
}

