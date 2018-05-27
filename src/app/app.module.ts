import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavHorizontalComponent } from './nav-horizontal/nav-horizontal.component';
import { NavVerticalComponent } from './nav-vertical/nav-vertical.component';
import { ChatsNavComponent } from './chats-nav/chats-nav.component';
import { ChatBodyComponent } from './chat-body/chat-body.component';


@NgModule({
  declarations: [
    AppComponent,
    NavHorizontalComponent,
    NavVerticalComponent,
    ChatsNavComponent,
    ChatBodyComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
