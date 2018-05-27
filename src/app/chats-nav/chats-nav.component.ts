import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chats-nav',
  templateUrl: './chats-nav.component.html',
  styleUrls: ['./chats-nav.component.css']
})
export class ChatsNavComponent implements OnInit {

  faPlus = faPlus;
  constructor() { }

  ngOnInit() {
  }

}
