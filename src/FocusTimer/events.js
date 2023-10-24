import * as el from "./elements.js";
import * as actions from './actions.js'


function addClickEvent(element) {
  element.addEventListener('click', (event) => {
    const action = event.target.dataset.action;
    if (typeof actions[action] === 'function') {
      actions[action](event);
    }
    
  });
}

export function registerControls() {
  addClickEvent(el.controls);
  addClickEvent(el.controlsMusic);
}

