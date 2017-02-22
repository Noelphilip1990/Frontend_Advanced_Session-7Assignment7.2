import { Component } from '@angular/core';
import { HighlightDirective } from './Highlight';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Assignament!';
	name: string = "Bob";
	
	


 empList: any = [
{name:"abc", designation: "SE", companyName: "AcadGild"},
{ name: "Adam", designation: "SE", companyName: "IBM" },
{ name: "Jose", designation: "SE", companyName: "Infosys" },
{ name: "Bill", designation: "ST", companyName: "IBM" },
{ name: "Jack", designation: "SE", companyName: "HP" },
{ name: "Burney", designation: "SE", companyName: "HP" },
	 ];
 constructor(private router: Router) { }
  
public  Hello(name,des,cname) {
	this.router.navigate(['/info',name,des,cname]);
  }

}
