import { Injectable } from "@angular/core";
import screenBreakpoints from "../interfaces/screen-breakpoints.interface";


@Injectable({ providedIn: 'root' })
export class screenBreakpointsService {
    init(){
        const root = getComputedStyle(document.body)
        const screenBreakpoints:screenBreakpoints = {
            xs: Number(root.getPropertyValue('--xs')),
            sm: Number(root.getPropertyValue('--sm')),
            md: Number(root.getPropertyValue('--md')),
            lg: Number(root.getPropertyValue('--lg')),
            xl: Number(root.getPropertyValue('--xl'))
        }
        return screenBreakpoints
    }
}

