import { Component, OnInit } from '@angular/core';
import  {GetTendersService} from  '../get-tenders.service';
import { CategoryPipe } from '../category.pipe';
@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.css']
})
export class TendersComponent implements OnInit {
  All:any;   // this array will be represent all tenders
 Categories:any=[];
  constructor(private tenders:GetTendersService) { 
  	tenders.GetTenders().subscribe(ok=>{
  		console.log(ok)
  		this.All=ok;
  		for(var i=0;i<ok.length;i++){//get all categories without duplicated value 
  			if(this.Categories.indexOf(ok[i]['category'])==-1){
  				this.Categories.push(ok[i]['category'])
  			}
  		}
  			
  	})
  }

  ngOnInit() {
  }

}
