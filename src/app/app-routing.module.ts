import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { VolunteerHomepageComponent } from './volunteer-homepage/volunteer-homepage.component';
import { NewDocumentComponent } from './new-document/new-document.component';
import { ViewDocumentComponent } from './view-document/view-document.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {path: 'account', component: AccountComponent},
  {path: 'volunteer-homepage', component: VolunteerHomepageComponent },
  {path: 'new-document', component: NewDocumentComponent},
  {path: 'user-homepage', component: UserHomepageComponent },
  {path: 'view-document', component: ViewDocumentComponent},
  {path: '**', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
