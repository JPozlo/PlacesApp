import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookings: Booking[] = [
    {
      id: 'abc',
      placeID: 'p1',
      placeTitle: 'Manhattan Mansion',
      guestNumber: 2,
      userID: 'xy'
    },
    {
      id: 'def',
      placeID: 'p2',
      placeTitle: 'Hamptons Mansion',
      guestNumber: 6,
      userID: 'yz'
    }
  ];

  getBookings() {
    return [...this.bookings];
  }

  constructor() { }
}
