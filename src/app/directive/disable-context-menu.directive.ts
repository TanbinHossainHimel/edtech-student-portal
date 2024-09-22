import {Directive, HostListener, Input} from '@angular/core';
import {environment} from "../../environments/environment";

@Directive({
  selector: '[appDisableContextMenu]',
  standalone: true
})
export class DisableContextMenuDirective {

  constructor() {
  }

  @HostListener('contextmenu', ['$event']) onContextMenu(event: Event) {
    if (environment.isProduction) {
      event.preventDefault();
    }
  }

}
