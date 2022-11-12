import { animate, state, style, transition, trigger } from "@angular/animations";

export const fadeInOut = trigger('fadeInOut',[
    state('open',
      style({
        opacity:'1',
    })
    ),
    state('close',
      style({
        opacity:'0',
    })
    ),
    transition('open => close',[animate('0.75s ease-out')]),
    transition('close => open',[animate('1.15s ease-in')])
  ]); 