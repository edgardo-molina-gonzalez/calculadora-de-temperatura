import { Routes } from '@angular/router';
import { CelciusToKelvinComponent } from './celcius-to-kelvin/celcius-to-kelvin.component';
import { FarenheitToRankieComponent } from './farenheit-to-rankie/farenheit-to-rankie.component';

export const routes: Routes = [
  {
    path: 'celcius-farenheit',
    loadComponent: () =>
      import('./celcius-to-farenheit/celcius.to.farenheit.component').then(
        (c) => c.CelciusComponent
      ),
  },
  {
    path: 'celcius-kelvin',
    loadComponent: () =>
      import('./celcius-to-kelvin/celcius-to-kelvin.component').then(
        (c) => c.CelciusToKelvinComponent
      ),
  },
  {
    path: 'celcius-rankie',
    loadComponent: () =>
      import('./celcius-to-rankie/celcius-to-rankie.component').then(
        (c) => c.CelciusToRankieComponent
      ),
  },
  {
    path: 'farenheit-celcius',
    loadComponent: () =>
      import('./farenheit-to-celcius/farenheit.to.celcius.component').then(
        (c) => c.FarenheitToCelciusComponent
      ),
  },
  {
    path: 'farenheit-rankie',
    loadComponent: () =>
      import('./farenheit-to-rankie/farenheit-to-rankie.component').then(
        (c) => c.FarenheitToRankieComponent
      ),
  },
  {
    path: 'farenheit-kelvin',
    loadComponent: () =>
      import('./farenheit-to-kelvin/farenheit-to-kelvin.component').then(
        (c) => c.FarenheitToKelvinComponent
      ),
  },
];
