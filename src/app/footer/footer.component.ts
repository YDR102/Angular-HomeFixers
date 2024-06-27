import { DOCUMENT } from '@angular/common';
import { Component, ViewChild, Renderer2, ElementRef, AfterViewInit, Inject } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent implements AfterViewInit  {

  @ViewChild('wp')
  wp!: ElementRef;

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit() {

  }

  showElement() {
    this.renderer.removeClass(this.wp.nativeElement, 'oculto');
  }

  hideElement() {
    this.renderer.addClass(this.wp.nativeElement, 'oculto');
  }
}
