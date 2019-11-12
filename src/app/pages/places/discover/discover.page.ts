import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';
import { Place } from 'src/app/services/place.model';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces: Place[] = [];
  listedLoadedPlaces: Place[];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.getPlaces();
    this.listedLoadedPlaces = this.loadedPlaces.slice(1);  // For virtual scrolling
  }

  // Adding segments on top of discover page
  onFilter(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }

}
