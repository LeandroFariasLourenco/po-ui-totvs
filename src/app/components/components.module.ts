import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [ButtonComponent, SelectComponent];

@NgModule({
  imports: [CommonModule, PipesModule, ReactiveFormsModule, FormsModule],
  declarations: [...components],
  exports: [...components],
})
export class ComponentsModule {}
