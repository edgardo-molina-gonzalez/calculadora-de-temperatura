import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-celcius-to-rankie',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './celcius-to-rankie.component.html',
})
export class CelciusToRankieComponent {
  /**
   * Grados celcius a rankie:
   *C x 9/5 + 491,67
   */
  public gradosRankie = new FormControl(null);

  public resultado = 0;

  onRankie() {
    this.resultado = (this.gradosRankie.value! * 9) / 5 + 491.67;
    this.gradosRankie.reset();
  }
}
