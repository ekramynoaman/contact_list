
import { trigger, state, transition, style, animate } from '@angular/animations';


export let fade = trigger('fade', [
    state('void', style({opacity: 0})),
    transition(':enter', [
      animate('2s ease-in')
    ])


  ]);
