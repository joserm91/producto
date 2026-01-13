import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-view',
  imports: [],
  templateUrl: './landing-view.html',
  styleUrl: './landing-view.css',
})
export class LandingView {

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
