import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { ArticlesModule } from './articles/articles.module';
import { GetStartModule } from './getstart/getstart.module';
import { AboutModule } from './about/about.module';
import { SideBarModule } from './sidebar/sidebar.module';
import { SignUpModule } from './signup/signup.module';
import { SignInModule } from './signin/signin.module';
import { ApiModule } from './API/API.module';
import { MessageModule } from './message/message.module';
import { SettingModule } from './setting/setting.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { UserLoginService } from './user/user-login.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';
import { LocalStorage } from './core/common/local.storage';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GetStartModule,
    AboutModule,
    ApiModule,
    SignUpModule,
    SignInModule,
    ArticlesModule,
    SideBarModule,
    MessageModule,
    SettingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [
    AuthGuard,
    AuthService,
    UserLoginService,
    LocalStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
