import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/anim/79206_http_401_unauthorized_client_error.json'
  };

  constructor() { }

  ngOnInit(): void {
  }

  animationCreaetd(animationItem: AnimationItem) {
    console.log(`animation ${animationItem}`);
  }

}
