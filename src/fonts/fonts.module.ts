import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontDirective } from './lib/directive/font.directive';
import { IconComponent } from './lib/components/icon/icon.component';



@NgModule({
  declarations: [FontDirective, IconComponent],
  imports: [
    CommonModule
  ],
  exports: [FontDirective, IconComponent]
})
export class FontsModule { }
