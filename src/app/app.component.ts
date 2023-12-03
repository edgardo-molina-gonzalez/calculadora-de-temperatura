import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  template: `
    <nav>
      <a routerLink="./celcius-farenheit" routerLinkActive="active"
        >Celcius a Farenheit</a
      >
      <a routerLink="./celcius-kelvin" routerLinkActive="active"
        >Celcius a Kelvin</a
      >
      <a routerLink="./celcius-rankie" routerLinkActive="active"
        >Celcius a Rankie</a
      >
      <a routerLink="./farenheit-celcius" routerLinkActive="active"
        >Farenheit a Celcius</a
      >
      <a routerLink="./farenheit-kelvin" routerLinkActive="active"
        >Farenheit a Kelvin</a
      >
      <a routerLink="./farenheit-rankie" routerLinkActive="active"
        >Farenheit a Rankie</a
      >
    </nav>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculadoras';
}
