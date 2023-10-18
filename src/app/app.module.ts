import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetaBussSupComponent } from './component/meta-buss-sup/meta-buss-sup.component';
import { BussSupManaComponent } from './component/buss-sup-mana/buss-sup-mana.component';
import { AuthGuard } from './component/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstModalComponent } from './component/first-modal/first-modal.component';
import { SeconndModalComponent } from './component/seconnd-modal/seconnd-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Confirm1Component } from './component/confirm1/confirm1.component';
import { WaitComponent } from './wait/wait.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MetaBussSupComponent,
    BussSupManaComponent,
    FirstModalComponent,
    SeconndModalComponent,
    Confirm1Component,
    WaitComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
