import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Venue} from './venue';
import {Datastore} from "../datastore";

@Injectable()
export class VenueService{
  constructor(private datastore: Datastore) {}

  getVenues(): Observable<Venue[]> {
    // @todo fetch from local datastore if data is available
    let data = this.datastore.query(Venue, {
        page: {size: 10, number: 1}
      });

    return data;
  }
}
