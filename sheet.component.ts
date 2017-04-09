/**
 * Created by Atif on 4/7/2017.
 */

import {Component} from "@angular/core";
import {TdMediaService} from "@covalent/core";
import {Title} from "@angular/platform-browser";

@Component({
  templateUrl: 'sheet.component.html'

})
export class SheetComponent {
  title: string;
  constructor(private _titleService: Title,
              public media: TdMediaService) { }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();

    this._titleService.setTitle( 'Product Dashboard' );
    this.title = this._titleService.getTitle();
  }
}
