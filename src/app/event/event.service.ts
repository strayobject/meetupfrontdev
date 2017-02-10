import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Event} from './event';
import {Datastore} from "../datastore";

@Injectable()
export class EventService{
  constructor(private datastore: Datastore) {}

  getEvents(): Observable<Event[]> {
    // @todo fetch from local datastore if data is available
    let data = this.datastore.query(Event, {
        page: {size: 10, number: 1}
      });

    return data;
  }
}
