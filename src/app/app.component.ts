import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'icons'

  examples = [
    'calendar-alt',
    'calendar-check',
    'calendar-minus',
    'calendar-plus',
    'calendar-times',
    'caret-square-down',
    'circle',
    'clipboard',
    'clock',
    'clone'
  ]
  dynamicIconName = 'address-card'
  radioIcon = 'caret-square-up'
  color = 'black'
}
