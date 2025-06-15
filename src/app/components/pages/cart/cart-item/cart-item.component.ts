import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../../../../models/pizza';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {

  @Input() pizzaItem!: Pizza;
  @Output() removeItem = new EventEmitter<number>();

  onRemoveItem(): void {
    this.removeItem.emit(this.pizzaItem.id);
  }
}
