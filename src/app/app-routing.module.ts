import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CallPapersComponent} from "./other_pages/call-papers/call-papers.component";
import {SponsorsComponent} from "./home/sponsors/sponsors.component";
import {SpeakersComponent} from "./home/speakers/speakers.component";
import {AboutComponent} from "./home/about/about.component";
import {GalleryComponent} from "./home/gallery/gallery.component";
import {CommitteeComponent} from "./home/committee/committee.component";
import {VenueComponent} from "./other_pages/venue/venue.component";
//import { RegistrationSubmitionComponent } from './other_pages/registration-submition/registration-submition.component';
import { RegistrationComponent } from './registration/registration.component';
import { SubmitionComponent } from './other_pages/submition/submition.component';

const routes: Routes = [
  {path:'' , component : HomeComponent},
  {path:'home' , component : HomeComponent},
  {path:'about_us' , component : AboutComponent},
  {path:'gallery' , component : GalleryComponent},
  {path:'call_for_paper' , component : CallPapersComponent},
  {path:'committee' ,component : CommitteeComponent},
  {path:'speakers' , component: SpeakersComponent},
  {path:'sponsors' , component : SponsorsComponent},
  {path:'venue' , component : VenueComponent},
  //{path:'reg-sub' , component : RegistrationSubmitionComponent},
  {path:'registration' , component : RegistrationComponent},
  {path:'submission' , component : SubmitionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
