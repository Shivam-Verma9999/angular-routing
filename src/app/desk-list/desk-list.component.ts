import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-desk-list',
  template: `
    <h2>Desk List</h2>
    <div>
      <li *ngFor="let item of list" [class.active] = "item.id === selectedId" (click)="detailView(item.id)" >
        {{item.name}}
      </li>
    </div>
  `,
  styles: []
})
export class DeskListComponent implements OnInit {

  list = [
    { id: 1, name: "name1" },
    { id: 2, name: "name2" },
    { id: 3, name: "name3" },
    { id: 4, name: "name4" },
  ]
  selectedId:Number = undefined;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(d => {
      console.log(d);
      this.selectedId = parseInt(d.get("id"));
    });
  }

  detailView(id: Number) {
    this.router.navigate([id], {relativeTo: this.route});
  }
}
