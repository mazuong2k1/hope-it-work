import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirstModalComponent } from '../first-modal/first-modal.component';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-buss-sup-mana',
  templateUrl: './buss-sup-mana.component.html',
  styleUrls: ['./buss-sup-mana.component.css']
})
export class BussSupManaComponent {

  isFullnameFieldTouched = false;
  isBussEmailTouched = false;
  isPerEmailTouched = false;
  isPhoneTouched = false;
  isFbPageTouched = false;

  profileForm = new FormGroup({
    lamasaas: new FormControl('',Validators.required),
    ditmequan: new FormControl('',Validators.required),
    yokanihr: new FormControl('',Validators.required),
    reason: new FormControl('Enter your reason.'),
    ssafasdf: new FormControl('',Validators.required),
    thangbebietdi: new FormControl('',Validators.required),
    cobebietdi: new FormControl(''),
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
    if (this.profileForm.valid){
    let dialogRef;
    console.log("if")

    // Sử dụng BreakpointObserver để xác định loại thiết bị
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      if (result.matches) {
        // Thiết bị di động
        dialogRef = this.dialog.open(FirstModalComponent, {
          width: '100%',
          height: '40%',
          data: {
            reason: this.profileForm.value.reason,
            ssafasdf: this.profileForm.value.ssafasdf,
            lamasaas: this.profileForm.value.lamasaas,
            ditmequan: this.profileForm.value.ditmequan,
            yokanihr: this.profileForm.value.yokanihr,
            thangbebietdi: this.profileForm.value.thangbebietdi,
          }
        });
      } else {
        // Máy tính để bàn
        dialogRef = this.dialog.open(FirstModalComponent, {
          width: '35%',
          height: '30%',
          data: {
            reason: this.profileForm.value.reason,
            ssafasdf: this.profileForm.value.ssafasdf,
            lamasaas: this.profileForm.value.lamasaas,
            ditmequan: this.profileForm.value.ditmequan,
            yokanihr: this.profileForm.value.yokanihr,
            thangbebietdi: this.profileForm.value.thangbebietdi,
          }
        });
      }
    });

   
  }
  else {
    // Nếu form không hợp lệ, thiết lập touched cho tất cả các trường để hiển thị thông báo lỗi
    this.profileForm.markAllAsTouched();
    console.log("else")
  }

}

}
