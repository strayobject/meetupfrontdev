import {Component, OnInit} from '@angular/core';

import {Venue} from './venue';
import {VenueService} from "./venue.service";

@Component({
  selector: 'my-venues',
  templateUrl: './venue.component.html',
})

export class VenueComponent implements OnInit {
  venues: Venue[];
  constructor(private venueService: VenueService) {}

  ngOnInit(): void {
    this.venueService.getVenues().subscribe(data => this.venues = data);
  }
}
