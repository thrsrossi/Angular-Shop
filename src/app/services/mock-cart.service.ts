import { Injectable } from '@angular/core';
import { ICartItem } from '../interfaces/ICartItem';

@Injectable({
  providedIn: 'root'
})
export class MockCartService {

  constructor() { }

  private cart: ICartItem[] = [{
      movie: {
        id: 6,
        name: "hej",
        description: "string",
        price: 589,
        imageUrl: "imageUrl",
        year: 8898,
        added: "string",
        productCategory: []
    },
    quantity: 5
  }];




}
