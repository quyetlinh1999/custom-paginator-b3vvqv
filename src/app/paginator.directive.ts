import { Directive, ElementRef, Input, ChangeDetectorRef, AfterViewInit, OnInit } from '@angular/core';
import { Paginator } from 'primeng/paginator';

@Directive({
    selector: 'p-paginator'
})
export class CfnPaginatorDirective implements AfterViewInit {

    constructor(
      private el: ElementRef,
      private cd: ChangeDetectorRef,
      private cmp: Paginator
    ) { }

  ngAfterViewInit() {
    console.log('tc:', this.cmp)
  }
}
