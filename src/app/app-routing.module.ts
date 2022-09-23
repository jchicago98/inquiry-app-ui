import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicsComponent } from './academics/academics.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { AccountComponent } from './account/account.component';
import { BillingComponent } from './billing/billing.component';
import { CareerComponent } from './career/career.component';
import { CultureComponent } from './culture/culture.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { NewsComponent } from './news/news.component';
import { NotificationComponent } from './notification/notification.component';
import { PersonalLifeComponent } from './personal-life/personal-life.component';
import { PostsComponent } from './posts/posts.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SecurityComponent } from './security/security.component';
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
  {path:'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'account', component: AccountComponent},
  {path: 'account-settings', component: AccountSettingsComponent},
  {path: 'security', component:SecurityComponent},
  {path: 'notification', component:NotificationComponent},
  {path: 'billing', component:BillingComponent},
  {path: 'post', component: PostsComponent},
  {path: 'messages', component: MessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
