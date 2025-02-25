import { NgModule } from '@angular/core';

import {NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeSectionComponent } from './home/welcome-section/welcome-section.component';
import { AboutComponent } from './home/about/about.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { SponsorsComponent } from './home/sponsors/sponsors.component';
import { HeaderComponent } from './shared/header/header.component';
import { CallPapersComponent } from './other_pages/call-papers/call-papers.component';
import {ImportantDatesComponent} from "./home/important-dates/important-dates.component";
import {SpecialSessionsComponent} from "./home/special-sessions/special-sessions.component";
import {AdresseMapComponent} from "./home/adresse-map/adresse-map.component";
import {ScientificComponent} from "./home/committee/scientific/scientific.component";
import {SpeakersComponent} from "./home/speakers/speakers.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {OrganizingChairsComponent} from "./home/committee/organizing-chairs/organizing-chairs.component";
import {CommitteeComponent} from "./home/committee/committee.component";
import { VenueComponent } from './other_pages/venue/venue.component';
import { RegistrationSubmitionComponent } from './other_pages/registration-submition/registration-submition.component';
import { RegistrationComponent } from './registration/registration.component';
import { SubmitionComponent } from './other_pages/submition/submition.component';
import { FaqComponent } from './home/faq/faq.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeSectionComponent,
    AboutComponent,
    ImportantDatesComponent,
    SpeakersComponent,
    GalleryComponent,
    SponsorsComponent,
    HeaderComponent,
    FooterComponent,
    CallPapersComponent,
    SpecialSessionsComponent,
    OrganizingChairsComponent,
    AdresseMapComponent,
    ScientificComponent,
    CommitteeComponent,
    VenueComponent,
    RegistrationSubmitionComponent,
    RegistrationComponent,
    SubmitionComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      NgbModule,
      NgbPaginationModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
