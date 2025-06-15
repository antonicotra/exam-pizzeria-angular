import { Component, computed, inject } from '@angular/core';
import { PizzaState } from '../../states/pizza.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floating-cart',
  imports: [],
  templateUrl: './floating-cart.component.html',
  styles: ``
})
export class FloatingCartComponent {

  public pizzaState = inject(PizzaState);
  private router = inject(Router);

  itemCount = computed(() => {
    return this.pizzaState.pizzasCart().reduce((sum, item) => sum + item.quantity, 0);
  });

  isCartEmpty = computed(() => this.itemCount() === 0);

  openCart(): void {
    if(!this.isCartEmpty()) {
      this.router.navigate(['/cart']);
    }
  }
}
