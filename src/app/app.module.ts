import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SponsorComponent} from "./sponsor/sponsor.component";
import {SponsorService} from "./sponsor/sponsor.service";
import {VenueService} from "./venue/venue.service";
import {VenueComponent} from "./venue/venue.component";
import {JsonApiModule} from "angular2-jsonapi";
import {Datastore} from "./datastore";
import {RoutingModule} from "./routing.module";
import {HomeComponent} from "./home/home.component";
import {PageComponent} from "./page/page.component";
import {EventComponent} from "./event/event.component";
import {EventService} from "./event/event.service";

@NgModule({
  declarations: [
    AppComponent,
    SponsorComponent,
    VenueComponent,
    HomeComponent,
    PageComponent,
    EventComponent,
    //NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonApiModule,
    RoutingModule,
  ],
  providers: [
    EventService,
    SponsorService,
    VenueService,
    Datastore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
