import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-view',
  template: `
    <p>
      clicked on id = {{id}}
    </p>
    <button (click)="goBack()">Back</button>
  `,
  styles: []
})
export class DetailViewComponent implements OnInit {
  id=0;
  constructor(private route : ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(pmap =>{this.id = parseInt(pmap.get("id"))})
  }
  goBack() {
    this.router.navigate(['../', { id: this.id, name:"Shivam verma" }], {relativeTo: this.route});
  }
}
