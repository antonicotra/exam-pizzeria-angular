import { Component, inject, Input } from '@angular/core';
import { Pizza } from '../../../../models/pizza';
import { RouterLink } from '@angular/router';
import { PizzaState } from '../../../../states/pizza.state';

@Component({
  selector: 'app-pizza-card',
  imports: [RouterLink],
  templateUrl: './pizza-card.component.html'
})
export class PizzaCardComponent {

  public pizzaState = inject(PizzaState);
  @Input() pizza!: Pizza;
}
