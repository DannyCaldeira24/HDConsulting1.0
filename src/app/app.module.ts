import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { ChatService } from './services/chat.service';
import { ChatComponent } from './components/chat/chat.component';
import { SendComponent } from './components/send/send.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SocialNetworksComponent } from './components/social-networks/social-networks.component';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChatComponent,
    SendComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    SocialNetworksComponent,
    ControlMessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config),
    AppRoutingModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
