import { Component } from '@angular/core';

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

}
