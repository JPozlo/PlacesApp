import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    new Place('p1', 'Manhattan Mansion', 'In the Manhattan district', 'assets/nycondo.jpeg', 200.99),
    new Place('p2', 'Hamptons Mansion', 'In the exclusive Hamptons area', 'assets/hamptons.jpg', 800.00),
    new Place('p3', 'Bel Air Mansion', 'In the exclusive and quiet Bel Air area', 'assets/belair.jpg', 850.00),
  ];
  constructor() { }

  getPlaces() {
    return [...this.places];
  }


  getPlace(id: string) {
    return { ...this.places.find(p => p.id === id) };
  }
}
