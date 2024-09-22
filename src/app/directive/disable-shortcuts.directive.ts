import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appDisableShortcuts]',
  standalone: true
})
export class DisableShortcutsDirective {

  constructor() {
  }

  @HostListener('keypress', ['$event']) onShortcutKey(event: KeyboardEvent) {
    console.warn(event);
    if (event.ctrlKey && 'cvxspwuazr'.indexOf(event.key) !== -1) {
      event.preventDefault();
    }
  }

//   document.body.addEventListener('keydown', event => {
//   if (event.ctrlKey && 'cvxspwuaz'.indexOf(event.key) !== -1) {
//   event.preventDefault()
// }
// })
}
