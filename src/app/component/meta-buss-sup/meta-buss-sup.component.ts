import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-meta-buss-sup',
  templateUrl: './meta-buss-sup.component.html',
  styleUrls: ['./meta-buss-sup.component.css']
})
export class MetaBussSupComponent {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
  }

  navigateToFishMain(event: Event): void {
    event.preventDefault();
    this.authService.setCanAccessBussSup(true);
    this.router.navigate(['/bussiness-support-center']);
  }

}
