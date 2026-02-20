import { createDraggable, utils } from "https://cdn.jsdelivr.net/npm/animejs@4.0.0/+esm";

const cards = document.querySelectorAll('.card-3d');

cards.forEach(card => {

  utils.set(card, { z: 100 });

  createDraggable(card, {
    x: { mapTo: 'rotateY' },
    y: { mapTo: 'z' }
  });

});