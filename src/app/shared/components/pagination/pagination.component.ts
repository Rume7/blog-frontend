import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  template: `
    <nav *ngIf="totalPages > 1">
      <ul class="pagination">
        <li [class.disabled]="currentPage === 1">
          <a (click)="onPageChange(currentPage - 1)">Previous</a>
        </li>
        <li *ngFor="let page of pages" [class.active]="page === currentPage">
          <a (click)="onPageChange(page)">{{page}}</a>
        </li>
        <li [class.disabled]="currentPage === totalPages">
          <a (click)="onPageChange(currentPage + 1)">Next</a>
        </li>
      </ul>
    </nav>
  `
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChanged = new EventEmitter<number>();

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChanged.emit(page);
    }
  }
}