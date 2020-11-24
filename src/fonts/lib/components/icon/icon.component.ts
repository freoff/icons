import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { ieVersion } from '../../helpers/ieVersion'

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.sass']
})
export class IconComponent implements OnChanges {
  current = true
  isIE = true
  @Input()
  iconName: string

  constructor() {
    this.isIE = ieVersion() === 11
  }

  getClassList(): string {
    return `icon icon-${this.iconName}`
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.iconName && this.isIE) {
      this.current = !this.current
    }
  }
}
