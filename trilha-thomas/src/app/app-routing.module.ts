import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotivationsComponent } from './components/navbar/motivations/motivations.component';
import { AboutComponent } from './components/navbar/about/about.component';
import { InterestsComponent } from './components/navbar/interests/interests.component';
import { RegisteredUsersComponent } from './components/navbar/registered-users/registered-users.component';
import { HomeComponent } from './components/navbar/home/home.component';

const routes: Routes = [
  { path: 'motivation', component: MotivationsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'intersts', component: InterestsComponent },
  { path: 'coders-users', component: RegisteredUsersComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
