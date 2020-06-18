import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './list-item/list-item.component';
import { TabComponent } from './tab/tab.component';
import { TabButtonComponent } from './tab-button/tab-button.component';



@NgModule({
  declarations: [ListItemComponent, TabComponent, TabButtonComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
