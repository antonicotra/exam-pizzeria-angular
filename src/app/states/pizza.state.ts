import { computed, inject, Injectable, signal } from '@angular/core';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../services/pizza.service';

@Injectable({
  providedIn: 'root'
})

export class PizzaState {

  userService = inject(PizzaService)
  pizzas = signal<Pizza[]>([])
  isLoading = signal<boolean>(false)
  errorMessage = signal<string>("")

  pizzasCart = computed(() => {
    return this.pizzas().filter(pizza => pizza.quantity > 0);
  });

  totalPrice = computed(() => {
    return this.pizzasCart().reduce((total, pizza) => {
      return total + (pizza.price * pizza.quantity);
    }, 0);
  });


  fetchData() {
    if (this.pizzas().length > 0) return

    this.isLoading.set(true);
    this.errorMessage.set("");
    this.userService.getPizzas().subscribe({
      next: result => {
        this.pizzas.set(result);
        this.isLoading.set(false);
      },
      error: err => {
        this.errorMessage.set(err.status == "404" ? err.status + ": Failed to fetch data" : 'An unknown error occurred');
        this.isLoading.set(false);
        this.pizzas.set([]);
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }

  incrementQuantity(pizzaId: number, quantity?: number): void {
    this.pizzas.update(currentPizzas =>
      currentPizzas.map(pizza =>
        pizza.id === pizzaId
          ? { ...pizza, quantity: quantity ? pizza.quantity + quantity : pizza.quantity + 1 }
          : pizza
      )
    );
  }

  decrementQuantity(pizzaId: number): void {
    this.pizzas.update(currentPizzas =>
      currentPizzas.map(pizza =>
        pizza.id === pizzaId && pizza.quantity > 0
          ? { ...pizza, quantity: pizza.quantity - 1 }
          : pizza
      )
    );
  }

  removeFromCart(pizzaId: number): void {
    this.pizzas.update(currentPizzas =>
      currentPizzas.map(pizza =>
        pizza.id === pizzaId ? { ...pizza, quantity: 0 } : pizza
      )
    );
  }

  clearCart(): void {
    this.pizzas.update(currentPizzas =>
      currentPizzas.map(pizza => ({ ...pizza, quantity: 0 }))
    );
  }

}
