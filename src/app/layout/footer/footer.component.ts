import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  bannerClass = 'blue-footer';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
    .pipe(filter(event => event instanceof NavigationStart))
    .subscribe((event: NavigationEnd) => {
      this.bannerClass = event.url === '/sustentabilidad' ? 'green-footer' : 'blue-footer';
    });
  }

}
