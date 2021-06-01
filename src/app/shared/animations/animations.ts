import {
    trigger,
    transition,
    style,
    query,
    animate,
  } from '@angular/animations';
  
  export const fader = trigger('routeAnimations', [
    transition('* <=> *', [
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: 0,
            transform: 'scale(0.3) translateY(20%)',
          }),
        ],
  
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate(
            '500ms cubic-bezier(.59,.2,.79,.84)',
            style({ opacity: 1, transform: 'scale(1) translateY(0)' })
          ),
          
        ],
        { optional: true }
      ),
    ]),
  ]);
  