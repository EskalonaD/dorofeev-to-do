import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-button',
  templateUrl: './tab-button.component.html',
  styleUrls: ['./tab-button.component.scss']
})
export class TabButtonComponent implements OnInit {

  constructor() { }

  @Input() tabName: string;
  @Output() click = new EventEmitter(); //does it needed at all???
  ngOnInit(): void {
  }

}
