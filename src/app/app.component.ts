import { Component, OnInit } from '@angular/core';
import {SponsorService} from "./sponsor/sponsor.service";
import {Sponsor} from "./sponsor/sponsor";
import {VenueService} from "./venue/venue.service";
import {Venue} from "./venue/venue";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  brand = 'GlasgowPHP';

  sponsors: Sponsor[];
  venues: Venue[];
  constructor(
    private sponsorService: SponsorService,
    private venueService: VenueService
  ) {}

  ngOnInit(): void {
    this.sponsorService.getSponsors().subscribe(data => this.sponsors = data);
    this.venueService.getVenues().subscribe(data => this.venues = data);
  }
}
