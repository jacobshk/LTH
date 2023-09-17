import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { VolunteerHomepageComponent } from './volunteer-homepage/volunteer-homepage.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogLoginComponent } from './dialog-login/dialog-login.component';
import { DialogSignupComponent } from './dialog-signup/dialog-signup.component';
import { NewDocumentComponent } from './new-document/new-document.component';
import { ViewDocumentComponent } from './view-document/view-document.component';
import { AccountComponent } from './account/account.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserHomepageComponent,
    VolunteerHomepageComponent,
    DialogLoginComponent,
    DialogSignupComponent,
    NewDocumentComponent,
    ViewDocumentComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    NgxExtendedPdfViewerModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
