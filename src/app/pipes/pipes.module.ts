import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TypeofPipe } from './typeof/typeof.pipe';

const pipes = [TypeofPipe];

@NgModule({
  imports: [CommonModule],
  declarations: [...pipes],
  exports: [...pipes],
})
export class PipesModule { }
