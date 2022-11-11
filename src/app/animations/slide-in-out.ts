import { trigger, state, style, transition, animate } from "@angular/animations";


export const slideInOut = trigger('slideInOut',[
    state('in',
      style({
        width: '0',
        transform:'translate(0)'
    })
    ),
    transition('void => *',[style({width:'100%',transform:'translate(-100%)'}),animate('1.25s ease')]),
    transition('* => void',[animate('1.25s ease-in'),style({width:'100%',transform:'translateX(-100%)'})])
  ]); 