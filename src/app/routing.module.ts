import {Routes, RouterModule} from "@angular/router";
import {VenueComponent} from "./venue/venue.component";
import {SponsorComponent} from "./sponsor/sponsor.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {PageComponent} from "./page/page.component";
import {EventComponent} from "./event/event.component";
const appRoutes: Routes = [
  {path: 'events', component: EventComponent},
  {path: 'venues', component: VenueComponent},
  {path: 'sponsors', component: SponsorComponent},
  //{path: '*', component: NotFoundComponent},
  {path: 'about', component: PageComponent, data: [{pageTitle: 'About GlasgowPHP'}]},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
})

export class RoutingModule {}
