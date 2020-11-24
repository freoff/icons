import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { ieVersion } from '../../helpers/ieVersion'

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  current = true
  isIE = true
  
  get iconName(): string {
    return this._iconName
  }

  @Input()
  set iconName(value: string) {
    this._iconName = value
    if (this.isIE) this.current = !this.current
    // 
    this.chdr.markForCheck()
  }

  constructor(private chdr: ChangeDetectorRef) {
    this.isIE = ieVersion() === 11
  }

  getClassList(): string {
    return `icon icon-${this.iconName}`
  }

  private _iconName: string
}
