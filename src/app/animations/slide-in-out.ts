import { trigger, state, style, transition, animate } from "@angular/animations";


export const slideInOut = trigger('slideInOut',[
    state('in',
      style({
        transform:'translate(0)',
    })
    ),
    transition('void => *',[style({transform:'translate(-100%)'}),animate('0.45s ease')]),
    transition('* => void',[animate('0.45s ease-out'),style({transform:'translateX(-100%)'})])
  ]); 