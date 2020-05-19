import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SliceEmailPipe } from './pipes/slice-email.pipe';

@NgModule({
  declarations: [SpinnerComponent, SliceEmailPipe],
  exports: [SpinnerComponent, SliceEmailPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
