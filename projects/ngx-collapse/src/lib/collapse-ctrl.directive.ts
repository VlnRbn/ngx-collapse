import {
  Directive,
  OnInit,
  ElementRef,
  HostBinding,
  HostListener,
  Input
} from '@angular/core';
import { CollapseContentDirective } from './collapse-content.directive';

// tslint:disable-next-line: directive-selector
@Directive({ selector: '[collapse]' })
export class CollapseCtrlDirective {
  constructor() {}

  content: CollapseContentDirective[];

  @Input('collapse')
  public set contentRef(
    v: CollapseContentDirective | CollapseContentDirective[]
  ) {
    if (v instanceof CollapseContentDirective ) {
      this.content = Array.of(v);
    } else if ( Array.isArray(v)) {
      this.content = v.filter(c => c instanceof CollapseContentDirective);
    }
  }


  // @HostBinding('class.expand')
  private expand = false;

  @HostBinding('class.collapsed')
  get collapsed() {
    return !this.content.every( c => c.open );
  }

  @HostListener('click') onCLick() {
    this.expand = !this.content.every(c => c.open);
    if (!this.content) {
      return;
    }

    this.content.forEach(c => c.toggle());
  }

  hide(c: CollapseContentDirective) {
    c.hide();
  }

  show(c: CollapseContentDirective) {
    c.show();
  }
}
