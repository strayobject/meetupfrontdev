import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Sponsor} from './sponsor';
import {Datastore} from "../datastore";

@Injectable()
export class SponsorService{
  constructor(private datastore: Datastore) {}

  getSponsors(): Observable<Sponsor[]> {
    return this.datastore.query(Sponsor, {
      page: {size: 10, number: 1}
    });
  }
}
