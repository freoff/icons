import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

const basePath = 'icons/regular.svg';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.sass'],

})
export class IconComponent   {
  @Input()
  iconName: string;

  getClassList(): string {
    return `icon icon-${this.iconName}`;
  }
}



