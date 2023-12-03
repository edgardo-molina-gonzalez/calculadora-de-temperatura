import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-farenheit-to-rankie',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './farenheit-to-rankie.component.html',
})
export class FarenheitToRankieComponent {
  /**
   * Grados Farenheit a Rankie:
   * R = F + 459,67
   */
  public gradosRankie = new FormControl(null);
  public resultado = 0;

  onRankie() {
    this.resultado = this.gradosRankie.value! + 459.67;
    this.gradosRankie.reset();
  }
}
