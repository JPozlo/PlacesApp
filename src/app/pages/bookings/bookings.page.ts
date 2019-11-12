import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { Booking } from 'src/app/services/booking.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];

  constructor(private bookingService: BookingService, private router: Router) { }

  ngOnInit() {
    this.loadedBookings = this.bookingService.getBookings();
  }

  onEdit(bookingID: string, bookSlidingItem: IonItemSliding) {
    bookSlidingItem.close();
    this.router.navigate(['/', 'bookings']);
    console.log('Edited booking of id: ' + bookingID);
  }
  onDelete(bookingID: string, bookSlidingItem: IonItemSliding) {
    bookSlidingItem.close();
    this.loadedBookings.filter(m => m.id !== bookingID);
    console.log('Deleted booking of id: ' + bookingID);
    // Cancel booking with booking id
  }

}
