import { NgModule } from '@angular/core';
import { CollapseContentDirective } from './collapse-content.directive';
import { CollapseCtrlDirective } from './collapse-ctrl.directive';



@NgModule({
  declarations: [ CollapseCtrlDirective, CollapseContentDirective],
  imports: [
  ],
  exports: [ CollapseCtrlDirective, CollapseContentDirective]
})
export class NgxCollapseModule { }
