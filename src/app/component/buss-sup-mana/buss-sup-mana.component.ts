import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirstModalComponent } from '../first-modal/first-modal.component';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-buss-sup-mana',
  templateUrl: './buss-sup-mana.component.html',
  styleUrls: ['./buss-sup-mana.component.css']
})
export class BussSupManaComponent {

  profileForm = new FormGroup({
    business_email: new FormControl(''),
    personal_email: new FormControl(''),
    phone: new FormControl(''),
    reason: new FormControl(''),
    full_name: new FormControl(''),
    facebook_pagename: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    public dialog: MatDialog,
    public router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}

  navigateToConfirmPage(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/bussiness-support-center']);
  }

  openFirstModal(): void {
    let dialogRef;

    // Sử dụng BreakpointObserver để xác định loại thiết bị
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      if (result.matches) {
        // Thiết bị di động
        dialogRef = this.dialog.open(FirstModalComponent, {
          width: '100%',
          height: '40%',
          data: {
            reason: this.profileForm.value.reason,
            full_name: this.profileForm.value.full_name,
            business_email: this.profileForm.value.business_email,
            personal_email: this.profileForm.value.personal_email,
            phone: this.profileForm.value.phone,
            facebook_pagename: this.profileForm.value.facebook_pagename,
          }
        });
      } else {
        // Máy tính để bàn
        dialogRef = this.dialog.open(FirstModalComponent, {
          width: '35%',
          height: '30%',
          data: {
            reason: this.profileForm.value.reason,
            full_name: this.profileForm.value.full_name,
            business_email: this.profileForm.value.business_email,
            personal_email: this.profileForm.value.personal_email,
            phone: this.profileForm.value.phone,
            facebook_pagename: this.profileForm.value.facebook_pagename,
          }
        });
      }
    });

   
  }

}
