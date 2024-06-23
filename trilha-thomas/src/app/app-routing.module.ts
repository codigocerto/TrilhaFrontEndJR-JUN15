import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotivationsComponent } from './components/pages/motivations/motivations.component';
import { AboutComponent } from './components/pages/about/about.component';
import { InterestsComponent } from './components/pages/interests/interests.component';
import { RegisteredUsersComponent } from './components/pages/registered-users/registered-users.component';
import { HomeComponent } from './components/pages/home/home.component';

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
