import {Component, OnInit} from '@angular/core';

import {Event} from './event';
import {EventService} from "./event.service";

@Component({
  selector: 'my-events',
  templateUrl: './event.component.html',
})

export class EventComponent implements OnInit {
  events: Event[];
  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(data => this.events = data);
  }
}
