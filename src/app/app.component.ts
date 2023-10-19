import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event as NavigationEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  title = 'mate-sip-ang';

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event: NavigationEvent): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.url === '/') {
          // Nếu đang ở trang chủ, chuyển hướng
          //window.location.href = 'https://www.google.com';
        }
      });
  }
}
