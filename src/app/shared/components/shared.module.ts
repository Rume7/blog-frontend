import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { HighlightDirective } from '../directives/highlight.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoadingSpinnerComponent,
    PaginationComponent,
    TruncatePipe,
    HighlightDirective
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingSpinnerComponent,
    PaginationComponent,
    TruncatePipe,
    HighlightDirective
  ]
})
export class SharedModule { }