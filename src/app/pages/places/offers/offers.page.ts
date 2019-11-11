import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/services/place.model';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: Place[];

  constructor(private route: ActivatedRoute, private placesService: PlacesService) { }

  ngOnInit() {
    this.offers = this.placesService.getPlaces();
  }

}
