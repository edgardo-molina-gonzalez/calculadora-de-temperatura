import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-farenheit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './farenheit.to.celcius.component.html',
})
export class FarenheitToCelciusComponent {
  //Farenheit a celcius: C = (F - 32) X 5/9

  public gradosCelcius = new FormControl(null);

  public resultado = 0;

  onCelcius() {
    this.resultado = ((this.gradosCelcius.value! - 32) * 5) / 9;
    this.gradosCelcius.reset();
  }
}
