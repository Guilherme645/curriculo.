import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  sidebarVisible: boolean = false;
  constructor(
    private http: HttpClient,
    private router: Router,
  ){}

  principal() {
    this.router.navigate(['/principal']);
  }
  index() {
    this.router.navigate(['/index']);
  }
}
