import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() setLanguage = new EventEmitter<string>()
  @Input() language;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.scrollToTop(); // Scroll to top every time page change
  }

  scrollToTop() {
    this.router.events
    .pipe(filter(event => event instanceof NavigationStart))
    .subscribe((event: NavigationEnd) => {
      window.scrollTo(0, 0); // Scroll to top
    });
  }

  selectLanguage(language: string) {
    this.language  = language;
    this.setLanguage.emit(language);
  }
}
