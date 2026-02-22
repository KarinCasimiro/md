import { animate, stagger, splitText } from 'https://esm.sh/animejs';

splitText('.title', {
  chars: { class: 'split-char' },
});

animate('.split-char', {
  y: ['2rem', '0rem'],
  opacity: [0, 1],
  ease: 'out(3)',
  delay: stagger(50),
});
