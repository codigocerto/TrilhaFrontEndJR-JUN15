import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PagesComponent } from './components/pages/pages.component';
import { AboutComponent } from './components/pages/about/about.component';
import { InterestsComponent } from './components/pages/interests/interests.component';
import { MotivationsComponent } from './components/pages/motivations/motivations.component';
import { RegisteredUsersComponent } from './components/pages/registered-users/registered-users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/pages/home/home.component';
import { ChartModule } from 'primeng/chart';
import { TimelineModule } from 'primeng/timeline';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PagesComponent,
    AboutComponent,
    InterestsComponent,
    MotivationsComponent,
    RegisteredUsersComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ChartModule,
    TimelineModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
