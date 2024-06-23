import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/navbar/about/about.component';
import { InterestsComponent } from './components/navbar/interests/interests.component';
import { MotivationsComponent } from './components/navbar/motivations/motivations.component';
import { RegisteredUsersComponent } from './components/navbar/registered-users/registered-users.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/navbar/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    InterestsComponent,
    MotivationsComponent,
    RegisteredUsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
