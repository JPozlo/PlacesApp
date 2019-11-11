import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1', 'Manhattan Mansion', 'In the Manhattan district', 'assets/nycondo.jpeg', 200.00),
    new Place('p2', 'Hamptons Mansion', 'In the exclusive Hamptons area', 'assets/hamptons.jpg', 800.00),
    new Place('p3', 'Bel Air Mansion', 'In the exclusive and quiet Bel Air area', 'assets/belair.jpg', 850.00),
  ];

  get places() {
    return this.places;
  }

  constructor() { }
}
