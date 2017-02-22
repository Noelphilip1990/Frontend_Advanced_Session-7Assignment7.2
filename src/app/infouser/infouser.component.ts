import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-infouser',
  templateUrl: './infouser.component.html',
  styleUrls: ['./infouser.component.css']
})
export class InfouserComponent implements OnInit {
	name: string;
	designation: string;
	cname: string;
	constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(params=>{
			this.name = params['name'];
			this.designation = params['des'];
			this.cname = params['cname'];
  	})
  }

}
