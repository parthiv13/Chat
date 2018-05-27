import { Component, OnInit } from '@angular/core';
import { faComment, faStar } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-vertical',
  templateUrl: './nav-vertical.component.html',
  styleUrls: ['./nav-vertical.component.css']
})
export class NavVerticalComponent implements OnInit {
  faCoffee = faComment;
  faStar = faStar;
  faTrash = faTrash;
  constructor() { }

  ngOnInit() {
  }

}
