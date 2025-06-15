import { Component, inject, signal } from '@angular/core';
import { PizzaState } from '../../../states/pizza.state';
import { RouterLink } from '@angular/router';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-cart',
  imports: [RouterLink, CartItemComponent, ConfirmationModalComponent],
  templateUrl: './cart.component.html'
})
export class CartComponent {
  public pizzaState = inject(PizzaState)
  isModalOpen = signal<boolean>(false)

  openConfirmationModal(): void {
    this.isModalOpen.set(true);
    this.pizzaState.clearCart();
  }

  closeConfirmationModal(): void {
    this.isModalOpen.set(false);
  }

}
