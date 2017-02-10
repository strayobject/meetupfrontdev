import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
@Component({
  templateUrl: './about.component.html',
})

export class PageComponent {
  pageTitle: string;

  constructor(route: ActivatedRoute) {
    this.pageTitle = route.snapshot.data[0]['pageTitle'];
  }
  //@todo fetch data from the api
}
