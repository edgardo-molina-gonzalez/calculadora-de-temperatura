import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-farenheit-to-kelvin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './farenheit-to-kelvin.component.html',
})
export class FarenheitToKelvinComponent {
  /**
   * Grados Farenheit a Kelvin:
   * K = (F + 459,67) * 5/9
   */
  public gradosKelvin = new FormControl(null);
  public resultado = 0;

  onKelvin() {
    this.resultado = ((this.gradosKelvin.value! + 459.67) * 5) / 9;
    this.gradosKelvin.reset();
  }
}
