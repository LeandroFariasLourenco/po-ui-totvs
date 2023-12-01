import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { Size, Variant } from './models';

@Component({
  selector: 'app-button',
  styleUrls: ['./button.component.css', '../shared/styles.css'],
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() type: 'button' | 'reset' | 'submit' = 'button';

  @Input() variant: Variant = 'primary';

  @Input() size: Size = 'normal';

  @Input() set icon(value: string | TemplateRef<void>) {
    if (typeof value === 'string') {
      this._icon = value;
      return;
    }
    this.iconTemplate = value;
  };

  get icon() {
    return this._icon;
  }

  @Input() label: string;

  @Input() disabled: boolean = false;

  @Output() onClick: EventEmitter<Event> = new EventEmitter<Event>();

  private _icon: string;

  public iconTemplate: TemplateRef<void>;

  constructor() {}

  public ngOnInit(): void {}
}
