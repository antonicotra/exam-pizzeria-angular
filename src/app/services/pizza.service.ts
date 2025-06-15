import { inject, Injectable } from '@angular/core';
import { Pizza } from '../models/pizza';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PizzaService {

  private readonly http = inject(HttpClient);

  public getPizzas() {
    return this.http.get<Pizza[]>("https://my-json-server.typicode.com/zoelounge/menupizza/cards")
  }
}
