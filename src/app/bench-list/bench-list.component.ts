import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bench-list',
  template: `
  <h2>Bnech List</h2>
  <div>
    <li *ngFor="let item of list" (click)="detailView(item.id)" >
      {{item.name}}
    </li>
  </div>

  `,
  styles: []
})
export class BenchListComponent implements OnInit {
  list = [
    { id: 1, name: "name1" },
    { id: 2, name: "name2" },
    { id: 3, name: "name3" },
    { id: 4, name: "name4" },

  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  detailView(id) {
    this.router.navigate(['/detailView', id]);
  }
}
