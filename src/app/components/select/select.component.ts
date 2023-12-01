import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgControl, ValidationErrors, Validator } from '@angular/forms';
import { v4 } from 'uuid';
import { Option } from './models/option.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectComponent),
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => SelectComponent),
    },
  ],
})
export class SelectComponent implements OnInit, ControlValueAccessor, AfterViewInit, Validator {
  @ViewChild('select') selectElement: ElementRef<HTMLSelectElement>;

  @Input() labelField: string;

  @Input() helpText: string;

  @Input() placeholder: string = 'Select an option';

  @Input() requiredText: string;

  @Input() options: Option[] = [];

  @Input() disabled: boolean = false;

  @Input() width: string = '200px';

  @Input() textError: string = 'Select an option'

  @Input() ngModel: string;

  @Input() error: boolean = false;

  @Output() errorChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() ngModelChange: EventEmitter<string> = new EventEmitter<string>();

  public ids = {
    select: v4(),
    helpText: v4(),
    textError: v4(),
  };

  constructor(
    private readonly cdr: ChangeDetectorRef
  ) { }

  private touched: boolean = false;

  private _onValidatorChange: Function;

  private _onTouched: Function;

  private _onChange: Function;

  public ngOnInit(): void {}

  public ngAfterViewInit(): void {
    if (this.ngModel) {
      this.selectValue = this.ngModel;
    }
  }

  private set selectValue(value: string) {
    if (!value) return;
    this.ngModelChange.emit(value);
    this.selectElement.nativeElement.value = value;
    this.valueToShow = value;
  }

  public get selectValue() {
    return this.selectElement.nativeElement.value;
  }

  public valueToShow: string

  public handleChange(value: string): void {
    this._onChange?.(value);
    this._onTouched?.();
    this.error = false;
    this.selectValue = value;
  }

  public handleBlur(): void {
    this.touched = true;
    this._onTouched?.();

    if (this._onValidatorChange) {
      this._onValidatorChange();
      return;
    }

    if (this.requiredText && !this.valueToShow) {
      this.error = true;
      return;
    }

    this.error = false;
  }

  public writeValue(value: string): void {
    this._onValidatorChange?.();

    this.cdr.detectChanges();
    this.selectValue = value;
  }

  public registerOnChange(onChange: any): void {
    this._onChange = onChange;
  }

  public registerOnTouched(onTouched: any): void {
    this._onTouched = onTouched;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (!this.touched || !control.errors) {
      return null;
    }

    let error: ValidationErrors | null = null;
    Object.keys(control.errors).forEach((validationRule) => {
      if (control.hasError(validationRule)) {
        error = control.errors![validationRule];
      }
    });
    this.error = !!error;
    return error;
  }

  public registerOnValidatorChange(fn: () => void): void {
    this._onValidatorChange = fn;
  }
}
