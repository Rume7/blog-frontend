import { Component, OnInit } from '@angular/core';

interface Poem {
  title: string;
  content: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentYear = new Date().getFullYear();
  currentPoem?: Poem;
  recentPoems: Poem[] = [];

  ngOnInit() {
    this.recentPoems = Array(10).fill(null).map((_, i) => ({
      title: `Poem Title ${i + 1}`,
      content: 'Poem content goes here...'
    }));

    this.currentPoem = {
      title: 'Current Poem Title',
      content: 'Your poem content goes here...'
    };
  }
}