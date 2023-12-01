import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-examples',
  templateUrl: './button-examples.component.html',
  styleUrls: ['./button-examples.component.css', '../shared/styles.css']
})
export class ButtonExamplesComponent implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

  public onButtonClick(e: Event): void {
    alert('You activated the button');
  }

}
