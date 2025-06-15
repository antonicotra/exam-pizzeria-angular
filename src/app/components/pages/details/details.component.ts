import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PizzaState } from '../../../states/pizza.state';
import { Pizza } from '../../../models/pizza';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  route = inject(ActivatedRoute)
  private pizzaState = inject(PizzaState);
  private router = inject(Router);
  pizza = signal<Pizza | undefined>(undefined);
  quantity = signal<number>(0)


  ngOnInit(): void {
    const routeId = this.route.snapshot.paramMap.get('id');

    if(routeId) {
      const foundPizza = this.pizzaState.pizzas().find(p => p.id.toString() === routeId)

      if(foundPizza) this.pizza.set(foundPizza)
      else this.router.navigate(['/menu'])
    }
  }


  addToCart() {
    this.pizzaState.incrementQuantity(this.pizza()!.id, this.quantity())
    this.router.navigate(['/menu']);
  }

}
