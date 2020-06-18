import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let anchor = this.route.snapshot.fragment;

    if (anchor) {
      const clientForm = document.getElementById(anchor);
      clientForm.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

}
