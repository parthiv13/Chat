import { Component, OnInit } from '@angular/core';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.css']
})
export class ChatBodyComponent implements OnInit {
  faPaperclip = faPaperclip;
  faPaperPlane = faPaperPlane;
  constructor() { }

  ngOnInit() {
  }

}
