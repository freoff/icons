import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconNameDeterminerService {

  constructor() { }

  determine(classList: string): string {
    const fontAwesomeIconRegex = /fa-(.*)\s?/;
    return fontAwesomeIconRegex.exec(classList) && fontAwesomeIconRegex.exec(classList)[1];

  }
}
