import {
  Directive,
  OnInit,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';
import { CollapseContentDirective } from './collapse-content.directive';

// tslint:disable-next-line: directive-selector
@Directive({ selector: '[collapse]' })
export class CollapseCtrlDirective implements OnInit {
  constructor(private elementRef: ElementRef ) {}

  @Input('collapse')
  public set contentRef(v: CollapseContentDirective) {
    console.log('setter', v);
    this.content = v;
  }

  content: CollapseContentDirective;

  @HostBinding('class.expand')
  expand = false;

  @HostListener('click') onCLick() {
    this.expand = !this.expand;

    console.log('el', this.content);
    if (!this.content) {
      return;
    }

    if (!this.expand) {
      // close
      this.content.hide();
    } else {
      // open
      this.content.show();
    }
  }

  ngOnInit() {}
}
