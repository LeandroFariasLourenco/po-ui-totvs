import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Option } from 'src/app/components/select/models';

@Component({
  selector: 'app-select-examples',
  templateUrl: './select-examples.component.html',
  styleUrls: ['./select-examples.component.css', '../shared/styles.css']
})
export class SelectExamplesComponent implements OnInit {
  public options: Option[] = [
    { label: 'First option', value: 'first' },
    { label: 'Second option', value: 'second' },
    { label: 'Third option', value: 'third' },
    { label: 'Fourth option', value: 'fourth' },
    { label: 'Fifth option', value: 'fifth' },
    { label: 'Sixth option', value: 'sixth' },
    { label: 'Seventh option', value: 'seventh' },
  ];

  public selectedValue: string = 'fifth';

  public formGroup = new FormGroup({
    selectedOption: new FormControl('sixth'),
    selectedOptionRequired: new FormControl('', [Validators.required])
  });

  constructor() { }

  public ngOnInit(): void {}
}
