import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { MaterialModule } from './material-modules/material.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AccountComponent } from './account/account.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { SecurityComponent } from './security/security.component';
import { NotificationComponent } from './notification/notification.component';
import { BillingComponent } from './billing/billing.component';
import { PostsComponent } from './posts/posts.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    SearchpageComponent,
    SignUpComponent,
    PrivacyPolicyComponent,
    AccountComponent,
    AccountSettingsComponent,
    SecurityComponent,
    NotificationComponent,
    BillingComponent,
    PostsComponent,
    SidenavComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:'', pathMatch: 'full', redirectTo:'homepage'},
      {path:'homepage', component: HomepageComponent}
    ])
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
