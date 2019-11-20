import {
  Directive,
  OnInit,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  TemplateRef
} from '@angular/core';

// tslint:disable-next-line: directive-selector
@Directive({ selector: '[collapseContent]', exportAs: 'collapseContent' })
export class CollapseContentDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  private nextIsOpen = null;

  private getHTMLEL(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.getHTMLEL().classList.add('collapse');
  }

  @HostListener('transitionend')
  onTransitionComplete() {
    const element: HTMLElement = this.getHTMLEL();
    if (this.nextIsOpen == true) {
      element.style.height = '';
      // this.collapsing = false;
      element.classList.remove('collapsing');
      element.classList.add('collapse');
      // this.collapse = true;
      element.classList.add('show');
    } else if (this.nextIsOpen == false) {
      // this.collapsing = false;
      element.classList.remove('collapsing');
      element.classList.add('collapse');
      // this.collapse = true;
    }
  }

  hide() {
    this.nextIsOpen = false;
    console.log('hide');
    const element: HTMLElement = this.getHTMLEL();

    // // remove collapse show
    element.classList.remove('collapse');
    element.classList.remove('show');

    const height = element.offsetHeight;
    element.style.height = `${height}px`;
    element.offsetHeight;

    // // collapsing and transition
    // this.collapsing = true;
    element.classList.add('collapsing');
    element.style.height = '';
  }

  show() {
    this.nextIsOpen = true;
    console.log('show');

    const element: HTMLElement = this.getHTMLEL();

    // this.collapse = false;
    // this.collapsing = true;
    element.classList.remove('collapse');
    element.classList.add('collapsing');

    const height = element.scrollHeight;
    element.style.height = `${height}px`;
  }
}
