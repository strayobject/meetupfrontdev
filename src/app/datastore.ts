import {Injectable} from "@angular/core";
import {JsonApiDatastoreConfig, JsonApiDatastore} from "angular2-jsonapi";
import {Sponsor} from "./sponsor/sponsor";
import {Http} from "@angular/http";
@Injectable()
@JsonApiDatastoreConfig({
  baseUrl: 'http://192.168.77.4:9080/app_dev.php/',
  models: {
    sponsors: Sponsor,
  }
})
export class Datastore extends JsonApiDatastore {
  constructor(http: Http) {
    super(http);
  }
}
