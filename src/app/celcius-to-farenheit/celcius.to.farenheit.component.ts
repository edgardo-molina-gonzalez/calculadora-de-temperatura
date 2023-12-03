import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-celcius',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './celcius.to.farenheit.component.html',
})
export class CelciusComponent {
  // Celcius a Farenheit: F = C * 9/5 + 32

  public placeholder: string = 'Celcius a Farenheit';

  public gradosCelcius = new FormControl(null);

  public resultado = 0;

  onConversion() {
    this.resultado = (this.gradosCelcius.value! * 9) / 5 + 32;
    this.gradosCelcius.reset();
  }
}
