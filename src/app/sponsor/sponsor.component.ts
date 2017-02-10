import {Component, OnInit} from '@angular/core';

import {Sponsor} from './sponsor';
import {SponsorService} from "./sponsor.service";

@Component({
  selector: 'my-sponsors',
  templateUrl: './sponsor.component.html',
})

export class SponsorComponent implements OnInit {
  sponsors: Sponsor[];
  constructor(private sponsorService: SponsorService) {}

  ngOnInit(): void {
    this.sponsorService.getSponsors().subscribe(data => this.sponsors = data);
  }
}
