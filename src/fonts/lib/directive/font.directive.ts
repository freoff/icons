import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewContainerRef
} from '@angular/core'
import { IconNameDeterminerService } from '../service/icon-name-determiner.service'
import { IconComponent } from '../components/icon/icon.component'
import { ieVersion } from '../helpers/ieVersion'

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '.fa'
})
export class FontDirective implements OnInit, OnChanges {
  @Input()
  dynamicIconName: string
  private component: ComponentRef<IconComponent>

  constructor(
    private view: ViewContainerRef,
    private elem: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private iconNameDeterminer: IconNameDeterminerService
  ) {}

  ngOnInit(): void {
    const iconName = this.dynamicIconName ?? this.iconNameDeterminer.determine(this.elem.nativeElement.classList)
    this.addIconComponent(iconName)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dynamicIconName && this.component) {
      this.component.instance.iconName = this.dynamicIconName
    }
  }

  private addIconComponent(iconName: string): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(IconComponent)
    this.view.clear()
    this.component = this.view.createComponent(factory)
    this.component.instance.iconName = iconName
  }
}
