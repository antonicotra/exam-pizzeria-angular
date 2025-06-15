import { Component, inject } from '@angular/core';
import { PizzaState } from '../../../states/pizza.state';
import { PizzaCardComponent } from './pizza-card/pizza-card.component';

@Component({
  selector: 'app-menu',
  imports: [PizzaCardComponent],
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  private pizzaState = inject(PizzaState);
  pizzas = this.pizzaState.pizzas;
  isLoading = this.pizzaState.isLoading;
  errorMessage = this.pizzaState.errorMessage;

  constructor() {
    this.pizzaState.fetchData()
  }

}
