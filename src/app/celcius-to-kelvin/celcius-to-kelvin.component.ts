import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-celcius-to-kelvin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './celcius-to-kelvin.component.html',
})
export class CelciusToKelvinComponent {
  /**
   * Formula celcius a kelvin:
   * K = C + 273.15
   */

  public gradosKelvin = new FormControl(null);
  public placeholder: string = 'Celcius a Kelvin';

  public resultado = 0;

  onKelvin() {
    this.resultado = this.gradosKelvin.value! + 273.15;
    this.gradosKelvin.reset();
  }
}
