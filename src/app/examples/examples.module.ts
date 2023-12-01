import { NgModule } from '@angular/core';
import { ButtonExamplesComponent } from './button-examples/button-examples.component';
import { ComponentsModule } from '../components/components.module';
import { SelectExamplesComponent } from './select-examples/select-examples.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [ButtonExamplesComponent, SelectExamplesComponent];

@NgModule({
  imports: [ComponentsModule, ReactiveFormsModule, FormsModule],
  declarations: [...components],
  exports: [...components],
})
export class ExamplesModule { }
