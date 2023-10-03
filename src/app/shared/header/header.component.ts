import { Component, Renderer2, ElementRef } from '@angular/core';

// Interfaces
import { Items } from '../interfaces/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  navItems: Items[] = [
    { title: 'Sobre nosotros', link: '' },
    { title: 'Servicios', link: '' },
    { title: 'Ubicanos', link: '' },
    { title: 'Contactanos', link: '' }
  ];

  constructor( 
    private elRef   : ElementRef,
    private renderer: Renderer2
  ) {}

  closeSideMenu() {
    const offcanvas = this.elRef.nativeElement.querySelector('#navbarNav');
    this.renderer.removeClass(offcanvas, 'show'); 

    const backdrop = document.querySelector('.offcanvas-backdrop');
    if ( backdrop ) { backdrop.remove(); }
  }

}
