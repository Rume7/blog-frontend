import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-loading',
    template: `
      <div class="loading-spinner" *ngIf="isLoading">
        <mat-spinner></mat-spinner>
      </div>
    `
  })
  export class LoadingComponent {
    @Input() isLoading: boolean = false;
  }