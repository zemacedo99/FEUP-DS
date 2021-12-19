import {computePosition} from '@floating-ui/dom';

function applyStyles({x = 0, y = 0, strategy = 'absolute'}) {
  Object.assign(floatingElement.style, {
      position: strategy,
      left: `${x}px`,
      top: `${y}px`,
  });
  }

export default function Feedback() {
    const referenceElement = document.querySelector('#button');
    const floatingElement = document.querySelector('#tooltip');

    applyStyles();

    computePosition(referenceElement, floatingElement, {
        placement: 'right',
    }).then(applyStyles);

}