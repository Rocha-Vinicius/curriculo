import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconStyleComponent } from './components/icon-style/icon-style.component';
import { ContactStyleComponent } from './components/contact-style/contact-style.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';




@NgModule({
  declarations: [
    IconStyleComponent,
    ContactStyleComponent,
    ToggleButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IconStyleComponent,
    ContactStyleComponent,
    ToggleButtonComponent
  ]
})
export class SharedModule { }
