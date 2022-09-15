import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicsComponent } from './academics/academics.component';
import { CareerComponent } from './career/career.component';
import { CultureComponent } from './culture/culture.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { PersonalLifeComponent } from './personal-life/personal-life.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
  {path:'homepage',component: HomepageComponent},
  {path:'login', component: LoginComponent},
  {path:'searchpage', component: SearchpageComponent},
  {path:'sign-up', component: SignUpComponent},
  {path:'academics', component: AcademicsComponent},
  {path:'career', component: CareerComponent},
  {path:'culture', component: CultureComponent},
  {path:'hobbies', component:HobbiesComponent},
  {path:'news', component:NewsComponent},
  {path:'personal-life', component: PersonalLifeComponent},
  {path:'privacy-policy', component: PrivacyPolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
