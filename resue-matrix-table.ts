/**
 * Created by Atif on 4/7/2017.
 */

import {Component, ViewEncapsulation} from "@angular/core";

@Component({
  selector: 'rm-table',
  templateUrl: 'resue-matrix-table.html',
  styleUrls: ['reuse-matrix-table.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReuseMatrixTableComponent {

  onRowClick(event: any) {
    console.log(event);
  }

  addRow() {

  }
}
